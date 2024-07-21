const express = require("express");
const { buildSchema } = require("graphql");
var app = express();
const {graphqlHTTP} = require("express-graphql");
var Schema = buildSchema(
  ` type Query{
        hello:String
    } `
);

// 处理器
const root = {
  hello: () => "Hello World!",
};
app.use("/home", function (req, res) {
  res.send("Hello World6666!");
});

app.use("/list", function (req, res) {
  res.send("list data");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: Schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(3000, function () {
  console.log("server is running at port 3000");
});
