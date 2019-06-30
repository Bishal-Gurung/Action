const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true, 
    useCreateIndex: true
});


//Creating a model Task
const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type:Boolean,
        default: false
    }
})

//creating instance of model
// const task = new Task({
//     description: 'learn the Mongoose Library',
//     completed: false
// })

// //returns promise
// task.save().then(()=>{
//     console.log(task);
// }).catch((error)=>{
//     console.log(error);
// })