//external modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
//internal modules
const DatabaseConnect = require("./src/config/databaseConnect");
const authRoute = require("./src/Routes/AuthRoutes");
const stockRoute = require("./src/Routes/StockRoutes");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//connecting with the DB
DatabaseConnect();

//Routes
app.use("/user", authRoute);
app.use("/stocks", stockRoute);

//Initiate the server
app.listen(process.env.PORT, () => {
  console.log(`App is listening on port ${process.env.PORT}`);
});
