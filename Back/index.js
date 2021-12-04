const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const employeeController = require("./controller/employee");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", employeeController);

mongoose
  .connect("mongodb://localhost:27017/addis", { useNewUrlParser: true })
  .then(() => {
    console.log("database connected successfully");
  });

app.listen(7000, () => {
  console.log("app is listening on port 7000");
});
