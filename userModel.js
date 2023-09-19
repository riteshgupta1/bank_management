const mongoose = require('mongoose');
const DB_LINK = require('../secrets').DB_LINK;
console.log(DB_LINK);
mongoose.connect(DB_LINK).then(function(){
    console.log("SuccessFully Connected to Database");
}).catch(function(err){
    console.log("Error:",err.message);
});

let userSchema = new mongoose.Schema({
    userName : {
        type: String,
        required: [true,"Name is required"]
    },
    email: {
        type: String,
        required: [true,"Email is Required"]
    },
    Balance:{
        type: Number
    } 
});

const userModel = mongoose.model('BankUserModel',userSchema);
module.exports = userModel;