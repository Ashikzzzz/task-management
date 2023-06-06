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

