
const express = require("express");

const Book1 = require("../models/book.model");

const router = express.Router();

const { body, validationResult } = require('express-validator');

router.get("", async(req,res) =>
{
    try
    {
        const Book = await Book1.find().lean().exec();

        return res.status(200).send({Book : Book});
    }
    catch(error)
    {
        return res.status(500).send({message : error.message});
    }
});

module.exports = router;