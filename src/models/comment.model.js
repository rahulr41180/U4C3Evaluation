
const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
    body : {type : String, required : false},
    UserId : 
    {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true,
    }
},
{
    timestamps : true,

    versionKey : false,
});

const Comment1 = mongoose.model("comment", CommentSchema);

module.exports = Comment1;