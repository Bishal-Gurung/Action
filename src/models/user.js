const mongoose = require('mongoose');
const validator = require('validator');


//Making User Model
const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,     //makes no spaces
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) 
            {
                throw new Error('Invalid Email');
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password'))
            {
                throw new Error('Password cannot contain "Password" ');
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            //creating own validation
            if(value < 0 )
            { 
                throw new Error('Age must be a positive number');
            }
        }
    }
})



//creating instance of user and passing a document
// const me = new User({
//     name: 'KARAN',
//     email: 'karan@gmail.com',
//     age: 22
// });


// //save returns promise so
// me.save().then(() => {
//     console.log(me);
// }).catch((error) => {
//     console.log('ERROR', error);
// })

module.exports = User