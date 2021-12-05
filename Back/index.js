const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const employeeController = require("./controller/employee");

var cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
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
