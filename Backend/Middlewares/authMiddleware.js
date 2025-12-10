const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const dotenv = require('dotenv');
dotenv.config({ quiet: true });
const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = async (req, res, next) => {

    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, JWT_SECRET);
            const user = await User.findOne({ email: decoded.email }).select("-password")

            if (!user) {
                return res.status(400).json({ message: "User not found" })
            }
            req.user = user
            return next()
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }

    if (!token) {
        return res.status(401).json({ message: "Not logged in" })
    }

}

module.exports = { authMiddleware };