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
   email: {
    type: String,
    required: true
   },
     due_date: {
        type: Date
     },

    status: {
        type: String,
        enum: ["inprogress,","completed","pending"]
    }
},
{
    timestamps: true,
}
);






// task model 

const Tasks = mongoose.model("Tasks",taskSchema)


module.exports = Tasks;