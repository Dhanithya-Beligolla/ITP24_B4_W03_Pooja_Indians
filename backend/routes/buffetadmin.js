const express = require("express");
const BuffetAdmin = require("../modules/buffetadmin.js");

const route = express.Router();


// get all contact users
route.get("/", async (req, res) => {
  try {
    const allBuffets = await BuffetAdmin.find({});
    res.status(200).json({ status: "SUCCESS", allBuffets });
  } catch (error) {
    res.status(500).json({ statue: "FILED", error });
  }
});

// create a new contact user
route.post("/create", async (req, res) => {
  try {
    const newBuffet = await BuffetAdmin.create(req.body);
    res.status(200).json({ status: "SUCCESS", newBuffet });
  } catch (error) {
    res.status(500).json({ statue: "FILED", error });
  }
});

// get single contact user
route.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const singleBuffet = await BuffetAdmin.findById(id);
    res.status(200).json({ status: "SUCCESS", singleBuffet });
  } catch (error) {
    res.status(500).json({ statue: "FILED", error });
  }
});

// update contact user
route.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const updatedBuffet = await BuffetAdmin.findByIdAndUpdate(id, req.body);
    res.status(200).json({ status: "SUCCESS", updatedBuffet });
  } catch (error) {
    res.status(500).json({ statue: "FILED", error });
  }
});

// delete contact user
route.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const removedBuffet = await BuffetAdmin.findByIdAndDelete(id);
    res.status(200).json({ status: "SUCCESS", removedBuffet });
  } catch (error) {
    res.status(500).json({ statue: "FAILED", error });
  }
});

module.exports = route;
