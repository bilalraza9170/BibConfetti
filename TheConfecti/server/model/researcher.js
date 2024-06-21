const mongoose = require('mongoose');
const { Schema }  = mongoose

const researcherSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    CFPid: {
        type: String,
        require: false,
    },
}, {
    timestamps: true
})

module.exports =  mongoose.model("Researcher", researcherSchema)