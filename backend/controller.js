const { response } = require('./app');
const User = require('./model');

const getUsers = (req, res, next) => {
    User.find()
        .then(response => {
            res.send({ response })
        })
        .catch(error => {
            res.json({ error })
        });
};

const addUser = (req, res, next) => {
    const { id, name, job_title, email, contact_number, age, education_qualification, work_experience } = req.body;

    // Validate required fields
    if (!id || !name || !job_title || !email || !contact_number || !age || !education_qualification || !work_experience) {
        return res.status(400).json({ error: "All fields are required." });
    }

    const user = new User({
        id: id,
        name: name,
        job_title: job_title,
        email: email,
        contact_number: contact_number,
        age: age,
        education_qualification: education_qualification,
        work_experience: work_experience,
        percentage: "0"
    });

    user.save()
        .then(response => {
            res.send({ response })
        })
        .catch(error => {
            res.json({ error })
        });
}

const percentageUpdate = (req, res, next) => {
    const promises = req.body.map(element => {
        const ID = element.id;
        const percentage = element.percentage;

        return User.updateMany({ id: ID }, { $set: { percentage: percentage } });
    });

    Promise.all(promises)
        .then(response => {
            res.send({ response });
        })
        .catch(error => {
            res.json({ error });
        });
};

const updateUser = (req, res, next) => {
    const { id, name, job_title, email, contact_number, age, education_qualification, work_experience } = req.body;

    // Validate required fields
    if (!id || !name || !job_title || !email || !contact_number || !age || !education_qualification || !work_experience) {
        return res.status(400).json({ error: "All fields are required." });
    }

    User.updateMany({ id: id }, { $set: { name: name, job_title: job_title, email: email, contact_number: contact_number, age: age, education_qualification: education_qualification, work_experience: work_experience } })
        .then(response => {
            res.send({ response })
        })
        .catch(error => {
            res.json({ error })
        });
}

const deleteUser = (req, res, next) => {
    const id = req.body.id;

    // Validate required fields
    if (!id) {
        return res.status(400).json({ error: "ID is required." });
    }

    User.deleteMany({ id: id })
        .then(response => {
            res.send({ response })
        })
        .catch(error => {
            res.json({ error })
        });
}

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.percentageUpdate = percentageUpdate;