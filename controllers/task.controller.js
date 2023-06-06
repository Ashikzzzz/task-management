const { createTaskServices } = require("../services/task.services");

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