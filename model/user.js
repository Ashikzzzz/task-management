const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
 
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required: true,
        unique : [true,"Email already exists"]
    },
    password : {
        type : String,
        required: true
    },
    status: {
        type: String,
        enum: ["active","inactive","blocked"]
    }
})