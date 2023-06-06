const { createTaskServices, updateAtaskServices } = require("../services/task.services");

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
// exports.createAtask = async (req, res, next) => {
//     try {
//         const result = await createTaskServices(req.body)
//         res.status(200).json({
//             status: 'success',
//             massage: "Create task Successfully!",
//             data: result
//         })
//     }
//     catch (error) {
//         res.status(400).json({
//             status: 'error',
//             massage: "Create task Error",
//             error: error.message
//         })
//     }
// };


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