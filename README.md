## Regarding Issues

tool to access an obj and return a new one which share the common part

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install --save-dev immutable-obj
```

## API

```javascript
var update = require('immutable-obj');
/*
obj // {}
path //array which define a scope for the changing part,the rest will be shared
value //if path exist alter the path value  else create the path then define the value
*/
var newObj = update(obj,path,value);
```

#usage
```javascript

var a = {b:{}, c:{'x':1,y:[1,2,3,4]}, d :[1,2,3] , e:{a:{a:{}}}};

var b = update(a, ['c',1,2], 2);

console.log('a',a,'\n' ,'b',b,'\n', a.b == b.b , b.c == b.c,b.c[1][2] );

var b = update(a, ['c','d'], 2);

console.log('a',a,'\n' ,'b',b,'\n', a.b == b.b ,a.c.y == b.c.y);

var b = update(a, ['province','address','name'], 'liu');

console.log('a',a,'\n' ,'b',b,'\n', a.b == b.b ,a.c.y == b.c.y);

```