
const mongoose = require("mongoose");

const PublicationSchema = mongoose.Schema({
    name : {type : String, required : true},
},
{
    timestamps : true,

    versionKey : false,
});

const Publication1 = mongoose.model("publication", PublicationSchema);

module.exports = Publication1;