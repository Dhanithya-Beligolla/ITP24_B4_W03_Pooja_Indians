const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8040;

const dataschema = mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    fid: {
        type: String,
        required: true
    },
    ftitle: {
        type: String,
        required: true
    },
    femail: {
        type: String,
        required: true,
        // Simple email format validation
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    basicSalary: {
        type: String,
        required: true,
        // Assuming basic salary is a numeric string
        match: /^\d+(\.\d{1,2})?$/
    },
    allowance: {
        type: Number,
        required: true
    },
    ot: {
        type: Number,
        required: true
    },
    bonus: {
        type: Number,
        required: true
    },
    deductionTax: {
        type: Number,
        required: true
    },
    deductionOther: {
        type: Number,
        required: true
    },
    other: {
        type: Number,
        required: true
    }
});

const salarymodel = mongoose.model("salary", dataschema);

app.post("/create", async (req, res) => {
    try {
        const data = new salarymodel(req.body);
        await data.save();
        res.send({ success: true, message: "record added" });
    } catch (error) {
        console.error(error);
        res.status(400).send({ success: false, message: "Validation failed. Please check your input data." });
    }
});

app.get("/", async (req, res) => {
    try {
        const data = await salarymodel.find({});
        res.json({ success: true, message: "", data: data });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
});

app.put("/update", async (req, res) => {
    const { id, ...rest } = req.body;
    try {
        const data = await salarymodel.updateOne({ _id: id }, rest);
        res.json({ success: true, message: "updated successfully", data: data });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
});

app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const data = await salarymodel.deleteOne({ _id: id });
        res.json({ success: true, message: "record deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
});

app.get("/salary/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const user = await salarymodel.findById(id);
        if (!user) {
            return res.status(404).send({ success: false, message: "User not found" });
        }
        res.send({ success: true, message: "record fetched successfully", data: user });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
});

app.get("/count_pay", async (req, res) => {
    try {
        const users = await salarymodel.find({});
        return res.status(200).json({
            count: users.length,
            data: users
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: "Error occurred while fetching salary count" });
    }
});

mongoose
    .connect("mongodb+srv://silva:Silva00@cluster0.cg8h5e2.mongodb.net/Finanacial?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log(`server connection ${PORT} !`);
        app.listen(PORT, () => console.log("server connection successful "));
    })
    .catch((err) => {
        console.error(err);
    });
