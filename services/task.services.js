const Task= require("../model/task")


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
exports.getTaskUserToUserServices = async (email) => {
    const result = await Task.findOne({email: {$eq: email}})
    return result
};


