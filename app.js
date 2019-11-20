var koa = require('koa');
var app = new koa();


const PORT = 3000
app.listen(PORT);
console.log(`listening in port: ${PORT}`);