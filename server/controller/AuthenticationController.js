const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authenticationController = {
    register: async (req, res) => {
        try {
            const {name, email, password} = req.body;
            console.log(name, email, password);
            if (!name || !email || !password) {
                return res.status(400).json({success: false, message: "Missing username/email/password"});
            }
            if (password.length < 6) {
                return res.status(400).json({success: false, message: "Password is at least 6 characters long."});
            }
            const user = await User.findOne({email}).lean();
            if (user) {
                return res.status(400).json({success: false, message: "The email already exists."});
            }
            const passwordHashed = await bcrypt.hash(password, 10);
            const newUser = await new User({name, email, password: passwordHashed});
            await newUser.save();
            const accessToken = createAccessToken({id: newUser._id});
            const refreshToken = createAccessToken({id: newUser._id});
            res.cookie('refresh-token', refreshToken, {
                httpOnly: true,
                path: '/user/refresh_token',
                maxAge: 7 * 24 * 60 * 60 * 1000 // 7d
            })
            return res.status(200).json({success: true, message: "Register successfully", user: newUser, accessToken})
        } catch (error) {
            return res.status(500).json({success: false, message: error.message});
        }
    },
    login: async (req, res) => {
        try {
            const {email, password} = req.body;
            if (!email || !password) {
                return res.status(400).json({success: false, message: "Missing user/password"});
            }
            const user = await User.findOne({email}).lean();
            if (!user) {
                return res.status(400).json({success: false, message: "Email is not register"});
            }
            console.log(user);
            const verifyPassword = await bcrypt.compare(password, user.password);
            if (!verifyPassword) {
                return res.status(400).json({success: false, message: "Invalid username/password"});
            }
            const accessToken = createAccessToken({id: user._id});
            const refreshToken = createRefreshToken({id: user._id});
            res.cookie('refresh-token', refreshToken, {
                httpOnly: true,
                path: '/user/refresh_token',
                maxAge: 7 * 24 * 60 * 60 * 1000 // 7d
            })
            return res.status(200).json({success: true, message: "Login successfully", accessToken});
        } catch (error) {
            return res.status(500).json({success: false, message: error.message});
        }
    }
}
const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET_KEY, {expiresIn: "11m"});
}
const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET_KEY, {expiresIn: '7d'})
}
module.exports = authenticationController;