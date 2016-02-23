var isObject = function(o){
	return typeof o == 'object';
};

var update= function(obj,path,value){
	
	if(typeof path === 'string') path = path.split('.');//scope string args

	path = path.slice(0);//create clone to avod modify argument path

	var func = function(obj,path){

		var item = path.shift();

		if(typeof item == 'undefined') return value;

		var retObj = ( (typeof item == 'string') ? {} : []);

		if(isObject(obj)){

			for(var key in obj){
				if(key !== item){
				    (retObj[key] = obj[key]);
				}
			}

		}

	    retObj[item] = func( obj&&obj[item] || 'undefined',path);

	    return retObj;

	}

	 return func(obj,path);
};

var isEqual = function(obj1,obj2){

	var key;

	if(isObject(obj1) && isObject(obj2)){

		for(key in obj1){

			if(obj2.hasOwnProperty(key)){

				if(!isEqual(obj1[key],obj2[key]) ){
					return false;
				}

			}else{
				return false;
			}
		}

	}else if(obj1 == obj2){

		return true;

	}else{

		return false;

	}

	return true;
};

update.isEqual = isEqual;

module.exports = update;