
const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
    likes : {type : Number, required : false},
    coverImage : {type : String, required : true},
    content : {type : String, required : true},
},
{
    timestamps : true,

    versionKey : false,
});

const Book1 = mongoose.model("book", BookSchema);

module.exports = Book1;