const express = require('express').Router;
const cors = require("cors");
const router = express();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");


//router.use(express.json());

router.use(cors());

//routers

router.get('/',async(req,res) =>{
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.get('/:id',async(req,res) =>{
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.post('/register', async(req,res) =>{
    try {
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(req.body.password, salt);
        //create new user
        const newUser = await new User({
                username: req.body.username,
                email: req.body.email,
                password: hashed
                });
        const user = await User.create(newUser);
        res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
});

// update a user
router.put('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        // we cannot find any user in database
        if(!user){
            return res.status(404).json({message: `cannot find any user with ID ${id}`})
        }
        const updatedUser = await User.findById(id);
        res.status(200).json(updatedUser);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});


// delete a user

router.delete('/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json({message: `cannot find any user with ID ${id}`})
        }
        res.status(200).json(user);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


module.exports = router;