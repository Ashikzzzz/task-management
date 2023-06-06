const { createAuserService, loginAuserService } = require("../services/user.service");

// save a user controller-------------------------------
exports.createAuser = async(req, res, next)=>{
    try {
        const data = req.body;
        console.log(data)
        const result = await createAuserService(data)
        console.log(result)
        res.status(200).json({
            status: 'success',
            massage: "User inserted Successfully!",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "User inserted Error",
            error: error.message
        })
    }
}

// login a user controller --------------------------------
exports.loginAuser = async(req, res, next)=>{
    try {
        const {email,password}= req.body                     //take data from body

 
        if(!password || !email){                              //cheak user email and password exists
            res.status(200).json({
                status: 'failed',
                massage: "Please insert your email and password",
            })
        }


        const user = await loginAuserService(email)        // if user exists send db the email


        if(!user){                                          // if not user send response
            res.status(200).json({
                status: 'failed',
                massage: "user doesn't exists",
             
       })
        }

        res.status(200).json({
            status: 'success',
            massage: "User logged in Successfull!",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "User logged in Error",
            error: error.message
        })
    }
}