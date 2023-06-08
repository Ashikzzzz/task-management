const Task= require("../model/task")
const mongoose =require("mongoose")

// create a task and it is created for one time. avoid create duplicate task---------------
exports.createTaskServices = async (data) => {
    if (data) {
        const taskData = await Task.findOne({title: {$eq: data.title}});

        console.log("taskData",taskData);
    
        if (taskData) {
            const result = "this task is already created";
            return result
        }
        else {
            const result = await Task.create(data);
            return result;
        }
    }
};


// update a task services ---------------
exports.updateAtaskServices = async (id, data) => {
    const result = await Task.updateOne({ _id: id }, { $set: data })
    return result
};


// delete a task services ---------------
exports.deleteTaskServices = async (id) => {
    const result = await Task.deleteOne({ _id: id })
    return result
};

// get task from user to user service ---------------
exports.getAllTaskServices = async () => {
    const result = await Task.find({})
    return result
};

// get  a task from user to user service ---------------
exports.getATaskServices = async (id) => { 
    const result = await Task.findById({_id:id})
    return result
};


// get task user from another user  and filtering by assigned user---------------
exports.getTaskUserToUserServices = async (email) => {
    console.log(email)
    const result = await Task.find({email: {$eq: email}})
    return result
};


// get task user from another user  and filtering by assigned user---------------
exports.getTaskByStatusServices = async (status) => {
    console.log(status)
    const result = await Task.find({status: {$eq: status}})
    return result
};