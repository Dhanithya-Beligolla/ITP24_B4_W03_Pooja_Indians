const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    id: Number,
    name: String,
    idnumber: Number,
    job_title: String,
    email: String,
    contact_number: String,
    age: Number,
    education_qualification: String,
    work_experience: String,
    percentage: Number,
})

const User = mongoose.model('User', userSchema);

module.exports = User;