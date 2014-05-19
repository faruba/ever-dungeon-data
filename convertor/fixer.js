var oldTable = require("./old/roles.js").data;
var newTable = require("./new/roles.js").data;
var fs = require("fs");

function getType(value){
	var ret = typeof(value);
	if( ret == "object" ){
		if( Array.isArray(value) ){
			ret = "array";
		}
	}
	return ret;
}

function fixObject(oldObject, newObject, key){
	var typeOld = getType(oldObject[key]);
	var typeNew = getType(newObject[key]);
	if( typeNew == typeOld ){
		if( typeOld == "array" ){
			var sizeOld = oldObject[key].length;
			var sizeNew = newObject[key].length;
			if( sizeOld != sizeNew ){
				console.log("ARRAY LEN FIXED: "+key);
				console.log("FROM = "+JSON.stringify(newObject[key], null, "\t"));
				console.log("TO   = "+JSON.stringify(oldObject[key], null, "\t"));
				newObject[key] = oldObject[key];
				return;
			}
		}
		for(var k in oldObject[key]){
			if( newObject[key][k] != null ){
				var kOldType = typeof(oldObject[key][k]);
				var kNewType = typeof(newObject[key][k]);
				if( kOldType == kNewType && kNewType == "object" ){
					fixObject(oldObject[key], newObject[key], k);
				}
			}
		}
	}
	else{
		console.log("FIXED: "+key);
		console.log("FROM = "+JSON.stringify(newObject[key], null, "\t"));
		console.log("TO   = "+JSON.stringify(oldObject[key], null, "\t"));
		newObject[key] = oldObject[key];
	}
}

for(var id=0; id<oldTable.length; ++id){
	var oldObject = oldTable[id];
	var newObject = newTable[id];
	if( newObject == null ){
		console.log("No corresponding new object");
	}
	else{
		for(var k in oldObject){
			if( newObject[k] != null ){
				var kOldType = typeof(oldObject[k]);
				var kNewType = typeof(newObject[k]);
				if( kOldType != kNewType ){
					fixObject(oldObject, newObject, k);
				}
			}
		}
	}
}

var buffer = JSON.stringify(newTable, null, "\t");
buffer = "exports.data = "+buffer;
fs.writeFileSync("./fixed/roles.js", buffer);