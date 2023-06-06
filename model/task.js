const mongoose = require('mongoose');


// task schema 

const taskSchema = new mongoose.Schema({
 
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required: true,
    },
    due_date : {
        type : String,
        required: true
    },
    status: {
        type: String,
        enum: ["in-progress,","completed","pending"]
    }
},
{
    timestamps: true,
}
);

// task model 

const Tasks = mongoose.model("Tasks",taskSchema)


module.exports = Tasks;