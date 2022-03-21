
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    firstName : {type : String, required : true},
    lastName : {type  : String, required : false},
    age : {type : Number, required : false},
    email : {type : String, required : true, unique : true},
    profileImage : {type : String, required : true},
},
{
    timestamps : true,

    versionKey : false,
});

const User1 = mongoose.model("user", UserSchema);

module.exports = User1;