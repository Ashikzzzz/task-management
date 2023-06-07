
const { createTaskServices, updateAtaskServices, deleteTaskServices, getTaskUserToUserServices } = require("../services/task.services");

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

// get a task from users to user -----------------------
exports.getTaskUserToUser = async (req, res, next) => {
    try {
      
        const result = await getTaskUserToUserServices(req.query.email)
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



//  user persistance -------------------------------
exports.getMe = async(req, res, next)=>{
    try {
        // console.log(req?.user?.userEmail)
       let user= await findUserByEmail(req?.user?.userEmail)
       console.log(user)
        res.status(200).json({
            status: 'success',
            massage: "User inserted Successfully!",
            data: user
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Data inserted Error",
            error: error.message
        })
    }
}