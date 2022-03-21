
const express = require("express");

const User1 = require("../models/user.model");

const router = express.Router();

const { body, validationResult } = require('express-validator');

router.get("", async(req,res) =>
{
    try
    {
        const User = await User1.find().lean().exec();

        return res.status(200).send({User : User});
    }
    catch(error)
    {
        return res.status(500).send({message : error.message});
    }
})

router.post("", body("firstName").trim().not().isEmpty().withMessage("First Name cannot be Empty").isLength({min : 3}).withMessage("first Name length should be minimum 3"), 
body("email").isEmail().custom( async(value) =>
{
    const User = await User1.findOne({email : value}).lean().exec();

    if(User)
    {
        throw new Error("Email is already taken");
    }
    return true;
}),body("lastName").custom(async(value) =>
{
   if(value && value.length < 3)
   {
        throw new Error("lastName length must have minimum 3 characters");
   }
   return true;
}),body("age").not().isEmpty().isNumeric().custom(async(value) =>
{

    if(value < 1 && value > 150)
    {
        throw new Error("Age must be greater than 1 or less than 150");
    }
    return true;
}), async(req,res) =>
{
    try
    {
        const User = await User1.create(req.body);

        return res.status(201).send({User : User});
    }
    catch(error)
    {
        return res.status(500).send({message : error.message});
    }
})

module.exports = router;