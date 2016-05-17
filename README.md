Pinch API
=================


Installation
=============
The generated code relies on node package manager (npm) being available to resolve dependencies.
You can install this package with this npm command : 
`npm install pinch-api --save`

  
Quick start
===========
The following shows how import the controllers and use:

1) Import the module:
```js
  var pinch = require('pinch-api');
```
2) Configure authentication parameters. For example:
```js
  pinch.configuration.xAPITOKEN = 'MY_API_KEY';
  pinch.configuration.xAPIEMAIL = 'myemail@example.com';
```

3) Make your requests :
```js
var ticketId = 42;
pinch.TicketController.get(ticketId, function(error, result){
  console.log(result);
});
```

Documentation
===========
Please refer to [the nodejs documentation](https://doc-company.inchbase.com/?javascript).