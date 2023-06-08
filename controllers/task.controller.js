
const { createTaskServices, updateAtaskServices, deleteTaskServices, getTaskUserToUserServices, getAllTaskServices, getATaskServices, getTaskByStatusServices } = require("../services/task.services");

// create a booking controller --
exports.createAtask = async (req, res, next) => {
    try {
      
        const result = await createTaskServices(req.body)
        res.status(200).json({
            status: 'success',
            massage: "Create task Successfully!",
            data: result
        })
    }
    catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Create task Error",
            error: error.message
        })
    }
};



// update a task controller 

exports.updateAtask = async (req, res, next) => {
    try {
        const id = req.params.id
        const body = req.body
        const result = await updateAtaskServices(id, body)
        res.status(200).json({
            status: 'success',
            massage: "Update a task successful",
            data: result
        })
    }
    catch (error) {
        res.status(400).json({
            status: "error",
            massage: "Task is not updated",
            error: error.message
        })
    }
};

// delete a task controller 

exports.deleteAtask = async (req, res, next) => {
    try {
        const result = await deleteTaskServices(req.params.id);
        res.status(200).json({
            status: 'success',
            massage: "Delete a task successful",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "error",
            massage: "Delete is not success",
            error: error.message
        })
    }
};



// get all task---------------------------------------
exports.getAllTask = async (req, res, next) => {
    try {
      
        const result = await getAllTaskServices()
        res.status(200).json({
            status: 'success',
            massage: "Create task Successfully!",
            data: result
        })
    }
    catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Create task Error",
            error: error.message
        })
    }
};


// get a  task---------------------------------------
exports.getATask = async (req, res, next) => {
    try {
       
        const result = await getATaskServices(req.params.id)
        res.status(200).json({
            status: 'success',
            massage: "get task Successfully!",
            data: result
        })
    }
    catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "get task Error",
            error: error.message
        })
    }
};


// get task user from another user  and filtering by assigned user-----------------------
exports.getTaskUserToUser = async (req, res, next) => {
    try {
    //   console.log(req.params.email)
        const result = await getTaskUserToUserServices(req.query.email)
        res.status(200).json({
            status: 'success',
            massage: "get a task Successfully!",
            data: result
        })
    }
    catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "get task Error",
            error: error.message
        })
    }
};

// get task by filtering due date-----------------------
exports.getTaskByStatus = async (req, res, next) => {
    try {
     const  {status} = req.query
        const result = await getTaskByStatusServices(status)
        res.status(200).json({
            status: 'success',
            massage: "get a task Successfully!",
            data: result
        })
    }
    catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "get task Error",
            error: error.message
        })
    }
};
