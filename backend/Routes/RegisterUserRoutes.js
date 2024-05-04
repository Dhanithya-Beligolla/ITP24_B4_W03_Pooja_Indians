const express = require("express");
const Customer = require("../models/User"); // Assuming Customer model is defined
const router = express.Router();

// Route for inserting a new registered user
router.post("/RegisterUserInsertion", async (req, res) => {
    try {
        // Your logic for registering a new user
        res.status(200).json({ success: true, message: "User registered successfully" });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: true, message: "Internal Server Error" });
    }
});

// Route for searching customers
router.get("/searchUser", async (req, res) => {
    try {
        const { page = 1, limit = 7, search = "", sort = "nic" } = req.query;
        const skip = (parseInt(page) - 1) * parseInt(limit);
        const query = {
            $or: [
                { firstName: { $regex: new RegExp(search, 'i') } },
                { lastName: { $regex: new RegExp(search, 'i') } },
                { email: { $regex: new RegExp(search, 'i') } },
                { nic: { $regex: new RegExp(search, 'i') } },
                { address: { $regex: new RegExp(search, 'i') } },
                { telephone: { $regex: new RegExp(search, 'i') } },
                { password: { $regex: new RegExp(search, 'i') } },
                { role: { $regex: new RegExp(search, 'i') } }
            ]
        };
        const users = await User.find(query)
            .sort({ [sort]: 1 })
            .skip(skip)
            .limit(parseInt(limit));
        res.status(200).json({ count: users.length, data: users });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: true, message: "Internal Server Error" });
    }
});

module.exports = router;
