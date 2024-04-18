const express = require("express")
const User = require("../Models/UserModel")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express.Router()


const authMiddleware = (req, res, next) => {
    const token = req.headers.Authorization;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, 'superencryptedsecret', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        } User.findById(decoded.userId, (err, user) => {
            if (err) {
                return res.status(500).json({ message: 'Failed to authenticate user' });
            }

            if (!user) {
                return res.status(401).json({ message: 'Unauthorized' });
            }

            req.user = user;
            next();
        });
    });
};

// Register a new user
app.post('/register', async (req, res) => {
    const { firstName, lastName, email, password, role } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role,
        });

        // Save the user to the database
        await newUser.save();

        return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Failed to register user', error);
        return res.status(500).json({ message: 'Failed to register user' });
    }
});

// Login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Check if the password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate a JSON Web Token (JWT)
        const token = jwt.sign({ userId: user._id }, 'superencryptedsecret');

        return res.json({ token, user });
    } catch (error) {
        console.error('Failed to login', error);
        return res.status(500).json({ message: 'Failed to login' });
    }
});

// Add user (only for admins)
app.post('/addUser', async (req, res) => {
    console.log(req.body)
    const { firstName, lastName, email, password, role } = req.body;

    try {
        // Check if the requesting user is an admin


        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role,
        });

        // Save the user to the database
        await newUser.save();

        return res.status(201).json({ message: 'User added successfully' });
    } catch (error) {
        console.error('Failed to add user', error);
        return res.status(500).json({ message: 'Failed to add user' });
    }
});

app.get("/", (req, res) => {
    return User.find().then((users) => {
        return res.status(200).json({ users })
    }).catch(err => {
        return res.status(500).json({ err })
    })
})
app.put("/:id", async (req, res) => {
    const id = req.params.id
    console.log("id is " + id)
    return await User.findById(id).then((user) => {
        if (user) {

            return user.set(req.body).save().then((user) => {
                return res.status(201).json({ user })
            }).catch(error => {
                return res.status(500).json({ error })
            })
        } else {
            return res.status(404).json({ "message": "user not found" })
        }
    }).catch(err => {
        console.log(err)
        return res.status(500).json({ err })
    })
})
app.delete("/:id", async (req, res) => {
    const id = req.params.id
    console.log("id is " + id)
    return await User.findByIdAndDelete(id).then(() => {
        return res.status(200).json({ "message": "deleted sucessfully" })
    }).catch(err => {
        console.log(err)
        return res.status(500).json({ err })
    })
})

app.get("/get-by-email/:email", async (req, res) => {
    const email = req.params.email;
    return await User.find({ email }).then((user) => {
        if (user) {
            return res.status(200).json({ user })
        } else {
            return res.status(404).json({ "message": "no user found" })
        }
    }).catch(err => {
        return res.status(500).json({ err })
    })
})

module.exports = app