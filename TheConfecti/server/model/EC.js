const mongoose = require('mongoose');
const { Schema }  = mongoose

const ecSchema = new Schema({
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
    Oname: {
        type: String,
        require: true,
    },
    CFPid: {
        type: String,
        require: true,
    },
}, {
    timestamps: true
})

module.exports =  mongoose.model("Editorial_Head", ecSchema)