var fs = require("fs");
var xlsx = require("node-xlsx");

function linkObject(target, value, path, type){
	//console.log("- link("+value+", "+path+", "+typeof(value)+")");
	if( value == null ){
		return;
	}
	var parent = target;
	var lastKey = null;
	var lastParent = parent;
	var compos = path.split(".");
	compos = compos.filter(function(str){
		if( str == '' ) return false;
		return true;
	});
	for(var k in compos){
		var key = compos[k];
		var isArray = false;
		var index = -1;
		if( key[key.length-1] == "]" ){
			isArray = true;
			index = Number(key.substring(key.indexOf("[")+1, key.length-1));
			key = key.substring(0, key.indexOf("["));
		}
		lastKey = key;
		lastParent = parent;
		if( parent[key] == null ){
			if( isArray ){
				parent[key] = [];
				lastParent = parent[key];
				lastKey = index;
				parent = parent[key][index];
			}
			else{
				parent[key] = {};
				parent = parent[key];
			}
		}
		else{
			parent = parent[key];
		}
	}
	switch(type){
		case "object":
		case "array":
			lastParent[lastKey] = JSON.parse(value);
			break;
		case "number":
			lastParent[lastKey] = Number(value);
			break;
		case "string":
			lastParent[lastKey] = String(value);
			break;
		case "boolean":
			lastParent[lastKey] = Boolean(value);
			break;
	}
}

function table2object(table){
	var root = [];
	var headers = [];
	//parse headers
	for(var k in table[0]){
		var col = table[0][k];
		var strs = col.split(":");
		var head = {
			path: strs[0],
			type: strs[1]
		};
		headers.push(head);
	}
	//parse data
	for(var i=1; i<table.length; ++i){
		var row = table[i];
		var obj = {};
		for(var j=0; j<row.length; ++j){
			if( row[j] != null ){
				linkObject(obj, row[j], headers[j].path, headers[j].type);
			}
		}
		root.push(obj);
	}
	return root;
}

function getFileName(path){
	var paths = path.split("/");
	return paths[paths.length-1];
}

function extractRowData(rawRow){
	var ret = [];
	for(var k=1; k<rawRow.length; ++k){
		if( rawRow[k] != null ){
			if( rawRow[k].value != rawRow[k].value ){//NaN
				ret.push(null);
			}
			else{
				ret.push(rawRow[k].value);
			}
		}
		else{
			ret.push(null);
		}
	}
	//console.log("RAW ROW = \n"+JSON.stringify(rawRow, null, "\t"));
	//console.log("EXT ROW = \n"+JSON.stringify(ret, null, "\t"));
	return ret;
}

function isEmpityRow(rawRow){
	if( rawRow == null ) return true;
	for(var k in rawRow){
		var column = rawRow[k];
		if( column != null && column.value != null && !(column.value!=column.value) ){
			return false;
		}
	}
	return true;
}

function main(){
	//--- argv ---
	var dstFile = process.argv[2];
	var srcFile = process.argv[3];
	var indent = process.argv[4];
	if( indent != null ){
		indent = Number(indent);
	}
	else{
		indent = 4;
	}
	//--- load src file ---
	var data = xlsx.parse(srcFile);
	var table = [];
	var head = null;
	var foot = null;

	//process data
	var rawData = data.worksheets[0].data;
	//console.log("RAW = \n"+JSON.stringify(rawData, null, "\t"));
	var headed = false;
	for(var i in rawData){
		var row = rawData[i];
		if( row[0] !=null && row[0].value == "#head" ){
			head = String(row[1].value);
			continue;
		}
		if( row[0] !=null && row[0].value == "#foot" ){
			foot = String(row[1].value);
			continue;
		}
		if( !headed ){
			if( row[0] !=null && row[0].value == "#path" ){
				table.push(extractRowData(row));
				headed = true;
			}
		}
		else{
			if( row[0] !=null && row[0].value == "#note" ) continue;
			if( !isEmpityRow(row) ){
				table.push(extractRowData(row));
			}
		}
	}
	var v1 = JSON.stringify(table);
	var v2 = JSON.parse(v1);
	var root = table2object(v2);
	var buffer = JSON.stringify(root, null, "\t");
	if( head != null ) buffer = head + buffer;
	if( foot != null ) buffer = buffer + foot;
	fs.writeFileSync(dstFile, buffer);
}

main();