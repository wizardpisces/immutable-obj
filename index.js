
var update= function(obj,path,value){

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

/*
	examples
*/

// var a = {b:{}, c:{'x':1,y:[1,2,3,4]}, d :[1,2,3] , e:{a:{a:{}}}};

// var b = update(a, ['c',1,2], 2);

// console.log('a',a,'\n' ,'b',b,'\n', a.b == b.b , b.c == b.c,typeof b.c[1][1] == 'undefined' );

// var b = update(a, ['c','d'], 2);

// console.log('a',a,'\n' ,'b',b,'\n', a.b == b.b ,a.c.y == b.c.y);

// var b = update(a, ['province','address','name'], 'liu');

// console.log('a',a,'\n' ,'b',b,'\n', a.b == b.b ,a.c.y == b.c.y);