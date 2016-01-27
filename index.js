
var update= function(obj,path,value){
	
	if(typeof path === 'string') path = path.split('.');//scope string args

	var func = function(obj,path){

		var item = path.shift();

		if(typeof item == 'undefined') return value;

		var retObj = ( (typeof item == 'string') ? {} : []);

		if(typeof obj == 'object'){

			for(var key in obj){
				if(key !== item){
				    (retObj[key] = obj[key]);
				}
			}

		}

	    retObj[item] = func( obj&&obj[item] || 'undefined',path)

	    return retObj;

	}

	 return func(obj,path);
}

module.exports = update;