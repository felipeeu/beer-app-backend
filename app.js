const koa = require('koa');
const app = new koa();
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://felipeeu:fevi2406@clusterfelipe-kdk6j.mongodb.net/beer?retryWrites=true");
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',()=>{console.log('connect to database')});

const PORT = 4000
app.listen(PORT);
console.log(`listening in port: ${PORT}`);
