import koa from 'koa'
import cors from '@koa/cors'
import mongoose from 'mongoose'
import mount from 'koa-mount'
import graphqlHTTP from 'koa-graphql'
import schema from './graphql/schema'


mongoose.connect("mongodb+srv://felipeeu:fevi2406@clusterfelipe-kdk6j.mongodb.net/beer?retryWrites=true");
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',()=>{console.log('connect to database')});

const app = new koa();

app.use(cors());
app.use(mount('/graphql', graphqlHTTP({
    schema:schema,
    graphiql: true
  })));


const PORT = process.env.PORT || 4000
app.listen(PORT);
console.log(`listening in port: ${PORT}`);
