const express = require("express");
const EmployeeModel = require("../model/employee");
const router = express.Router();

router.post("/", async (req, res) => {
  //res.send("Post is called");
  console.log(req.body);

  try {
    const { employeeName, dateofBirth, gender, salary } = req.body;
    const obj = {
      employeeName,
      dateofBirth,
      gender,
      salary,
    };
    const data = new EmployeeModel(obj);

    await data.save();

    console.log("the value of final is " + data);

    res.json(data);
  } catch (err) {
    console.log("the error is ", err);
  }
});

router.get("/", async (req, res) => {
  try {
    const search = await EmployeeModel.find();
    console.log("search value is ", search);
    res.status(200).json(search);
  } catch (err) {
    console.log("the error is ", err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { employeeName, dateofBirth, gender, salary } = req.body;
    console.log("the result of the id is " + req.params.id);
    console.log("req.body is ", req.body);
    const updated = await EmployeeModel.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { employeeName, dateofBirth, gender, salary }, new: true }
    );

    res.send(updated);
  } catch (err) {
    console.log("error while updating", err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    console.log("id is ", req.params.id);
    const deleted = await EmployeeModel.findOneAndDelete({
      _id: req.params.id,
    });

    res.send(deleted);
  } catch (err) {
    console.log("the error is ", err);
  }
});

module.exports = router;
