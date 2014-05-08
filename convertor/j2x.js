var fs = require("fs");
var xlsx = require("node-xlsx");

function mergeColumn(col1, col2){
	var ret = {};
	for(var k in col1){
		ret[k] = col1[k];
	}
	for(var k in col2){
		ret[k] = col2[k];
	}
	return ret;
}

function parse(node, config){
	//detect type
	var type = typeof(node.value);
	var isCollection = false;
	if( type == "object" ){
		isCollection = true;
		if( Array.isArray(node.value) ){
			type = "array";
		}
	}

	//check if expand
	var expand = true;
	if( node.deepth > config.deepth ){
		expand = false;
	}

	//insert header
	if( !isCollection || !expand ){
		var header = node.path+":"+type;
		if( config.headers.indexOf(header) < 0 ){
			config.headers.push(header);
		}
	}
	

	//traverse values
	var ret = {};
	switch(type){
		case "object":{
			if( expand ){
				//ret[header] = null;
				for(var k in node.value){
					var newnode = {
						value: node.value[k],
						path: node.path+"."+k,
						deepth: node.deepth+1
					};
					var sub = parse(newnode, config);
					ret = mergeColumn(ret, sub);
				}
			}
			else{
				ret[header] = JSON.stringify(node.value);
			}
		}break;
		case "array":{
			if( expand ){
				//ret[header] = node.value.length;
				for(var k in node.value){
					var newnode = {
						value: node.value[k],
						path: node.path+"["+k+"]",
						deepth: node.deepth+1
					};
					var sub = parse(newnode, config);
					ret = mergeColumn(ret, sub);
				}
			}
			else{
				ret[header] = JSON.stringify(node.value);
			}
		}break;
		case "number":
		case "string":
		case "boolean":
		{
			ret[node.path+":"+type] = node.value;
		}break;
	}
	return ret;
}

function getFileName(path){
	var paths = path.split("/");
	return paths[paths.length-1];
}

function main(){
	//--- argv ---
	var dstFile = process.argv[2];
	var srcFile = process.argv[3];
	var deepth = process.argv[4];
	if( deepth != null ){
		deepth = Number(deepth);
	}
	else{
		deepth = 1;
	}
	var fileName = getFileName(srcFile);

	//--- load src file ---
	var src = require(srcFile);
	var table = src.data;

	//--- main logic ---
	var config = {
		deepth: deepth,
		headers:[],
		name: fileName
	};
	var grids = [];
	for(var k in table){
		var node = {
			value: table[k],
			path: "",
			deepth: 0
		};
		grids[grids.length] = parse(node, config);
	}
	//translate grid into xlsx
	var data = xlsxBuilder(grids, config);
	var buffer = xlsx.build(data);
	fs.writeFileSync(dstFile, buffer);
}

function htmlBuilder(grids, config){
	var ret = "<head><title>j2x sample</title><meta charset='utf-8'/><head><body><table border='1px'>";
	//add head
	ret += "<tr>";
	for(var k in config.headers){
		ret+="<td>"+config.headers[k]+"</td>";
	}
	ret+="</tr>";
	//add contents
	for(var k in grids){
		var g = grids[k];
		ret+="<tr>";
		for(var m in config.headers){
			var head = config.headers[m];
			if( g[head] != null ){
				ret+="<td>"+g[head]+"</td>";
			}
			else{
				ret+="<td></td>";
			}
		}
		ret+="</tr>";
	}
	ret+="</table></body>";
	return ret;
}

function xlsxBuilder(grids, config){
	var table = [];
	//wirte head
	{
		var row = [];
		row.push({
				value: "#head",
				formatCode: "General"});
		row.push({
			value: "exports.data = ",
			formatCode: "General"});
		table.push(row);
	}
	//write header
	{
		var row = [];
		row.push({
				value: "#path",
				formatCode: "General"});
		for(var k in config.headers){
			row.push({
				value: config.headers[k],
				formatCode: "General"});
		}
		table.push(row);
	}
	//write data
	for(var ln in grids){
		var row = [];
		row.push({
				value: null,
				formatCode: "General"});
		for(var k in config.headers){
			var key = config.headers[k];
			var val = grids[ln][key];
			row.push({
				value: val,
				formatCode: "General"});
		}
		table.push(row);
	}

	var ret = {
		worksheets:[{
			name:config.name,
			data:table
		}]
	};

	return ret;
}

main();