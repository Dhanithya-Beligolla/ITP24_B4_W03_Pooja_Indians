const { response } = require('./app');
const User = require('./model');

const getUsers = (req, res, next) => {
    User.find()
        .then(response => {
            res.send({response})
        })
        .catch(error => {
            res.json({ error })
        });
};

const addUser = (req, res, next) => {
    const user = new  User({
        id: req.body.id,
        name: req.body.name,
        job_title: req.body.job_title,
        email: req.body.email,
        contact_number: req.body.contact_number,
        age: req.body.age,
        education_qualification: req.body.education_qualification,
        work_experience: req.body.work_experience,
        percentage: "0"
    });
    user.save()
        .then(response => {
            res.send({response})
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
    User.updateMany({ id: id }, { $set: { name: name, job_title: job_title, email: email, contact_number: contact_number, age: age, education_qualification: education_qualification, work_experience: work_experience } })
        .then(response => {
            res.send({response})
        })
        .catch(error => {
            res.json({ error })
        });
}

const deleteUser = (req, res, next) => {
    const id = req.body.id;
    //vlidation 
    
    res.status(400).send("ID is required")


    User.deleteMany({ id: id })
        .then(response => {
            res.send({response})
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
