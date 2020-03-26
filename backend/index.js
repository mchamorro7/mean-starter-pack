'use strict'

const mongoose = require('mongoose');
const app = require('./app');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://database/admin', { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB from backend");
    app.listen(3000, () => console.log('Server on port 3000'));
  })
  .catch(err => console.log("Error trying to connect to MongoDB", err))

//GraphQL

// const express_graphql = require('express-graphql');
// const { buildSchema } = require('graphql');

// GrapqhQL Schema
// const schema = buildSchema(`
//   type Query {
//     message: String
//   }
// `);

// const root = {
//   message: () => 'Hello World!'
// };

// // GraphQL endpoint
// app.use('', express_graphql({
//   schema: schema,
//   rootValue: root,
//   graphiql: true
// }));






