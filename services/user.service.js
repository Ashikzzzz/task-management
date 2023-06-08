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

// get users profile service ------------------------
exports.getAuserService= async(id)=>{
    const result = await User.findOne({_id : id})
    return result
}
// manage users profile service ------------------------
exports.manageProfileService= async(id,data)=>{
    const result = await User.updateOne({ _id: id }, { $set: data })
    return result
}


// user persistance
exports.findUserByEmail = async (email) => {
    return await User.findOne({ email });
 };

 // get all admin ---------------------
exports.getUserAsAdminServices=async()=>{
    const result = await User.find({role:"admin"})
    return result
}
 