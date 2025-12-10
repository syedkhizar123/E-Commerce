const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');  
const dotenv = require('dotenv');
dotenv.config({quiet: true});
const JWT_SECRET = process.env.JWT_SECRET;  

const registerUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        if(!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }
        const existingUser = await User.findOne({ email });
        if(existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }  
        const hashedPassword = await bcrypt.hash(password, 10);
        const token = jwt.sign({ email }, JWT_SECRET , { expiresIn: '10d' });
        const newUser = new User({
            email,
            password: hashedPassword,
            cart: []
        });
        await newUser.save();
        return res.status(200).json({ message: "User registered successfully", token });
    } catch (error) {
        console.log(error)
    } 
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        if(!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        } 
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(400).json({ message: "User does not exist" });
        }  
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) {
            return res.status(400).json({ message: "Invalid password" });
        }
        const token = jwt.sign({ email }, JWT_SECRET , { expiresIn: '10d' });
        user.token = token;
        await user.save();
        res.status(200).json({ message: "Login successful", token , user});
    } catch (error) {
        console.log(error)
    }   
}

module.exports = { registerUser, loginUser };