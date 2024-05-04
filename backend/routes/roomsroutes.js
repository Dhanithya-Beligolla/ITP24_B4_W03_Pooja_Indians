// const express=require("express")


// const roomsmodel = require("../models/roomsmodel");

// const router = express.Router();

// router.get("/", async (req, res) => {
//     const data = await roomsmodel.find({})

//     res.json({ success: true, data: data })
// })

// // create
// router.post("/create", async (req, res) => {
//     const data = new roomsmodel(req.body)
//     await data.save()
//     res.send({ success: true, message: "rooms added successfuly" })
// })

// // update
// router.put("/update", async (req, res) => {
//     const { id, ...rest } = req.body
//     const data = await roomsmodel.updateOne({ _id: id }, rest)
//     res.send({ success: true, message: "updated successfuly", data: data })
// })


// // delete
// router.delete("/delete/:id", async (req, res) => {
//     const id = req.params.id
//     const data = await roomsmodel.deleteOne({ _id: id })
//     res.send({ success: true, message: "deleted successfully", data: data })
// })


// // fetch updated
// router.get("/rooms/:id", async (req, res) => {
//     const id = req.params.id;

//     try {
//         const discount = await roomsmodel.findById(id);

//         if (!discount) {
//             return res.status(404).send({ success: false, message: "User not found" });
//         }

//         res.send({ success: true, message: "User fetched successfully", data: discount });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send({ success: false, message: "Internal Server Error" });
//     }
// });

// //get count in rooms table
// router.get("/count_rooms", async (req, res) => {
//     try {
//         const users = await roomsmodel.find({});

//         return res.status(200).json({
//             count: users.length,
//             data: users
//         })

//     } catch (err) {
//         console.log(err.message);
//         res.json({ success: true, message: "discount count successfully", data: data })
//     }

// })
// module.exports = router;

const express = require("express");
const router = express.Router();
const roomsModel = require("../models/roomsModel");

// Get all rooms
router.get("/", async (req, res) => {
  try {
    const data = await roomsModel.find({});
    res.json({ success: true, data: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Create a room
router.post("/create", async (req, res) => {
    try {
      const data = new roomsModel(req.body);
      await data.save();
      res.status(201).json({ success: true, message: "Room added successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  });

// Update a room
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = await roomsModel.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ success: true, message: "Room updated successfully", data: updatedData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

router.delete("/delete/:id", async (req, res) => {
        const id = req.params.id
        const data = await roomsmodel.deleteOne({ _id: id })
        res.send({ success: true, message: "deleted successfully", data: data })
    })
router.get("/count_rooms", async (req, res) => {
    try {
      const rooms = await roomsModel.find({});
      const count = rooms.length;
      res.status(200).json({ count, data: rooms });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  });
  
  

module.exports = router;
