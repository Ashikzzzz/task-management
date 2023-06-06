const User = require("../model/user")


// save a user services ---------------------------
exports.createAuserService = async(data)=>{
    const result = await User.create(data)
    return result;
}


// login a user service--------------------------------
exports.loginAuserService = async(email)=>{
    const result = await User.findOne({email:email})
    return result;
}