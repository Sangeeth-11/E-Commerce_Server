const users = require('../models/userModels')
const jwt = require('jsonwebtoken')

exports.userRegister = async (req, res) => {
    const { username, email, password } = req.body
    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(406).json("Already registered")
        } else {
            const newUser = new users({ email, username, password })
            await newUser.save()
            res.status(200).json(newUser)

        }
    } catch (error) {
        res.status(404).json(error)

    }
}
exports.userLogin = async (req, res) => {
    const {  email, password } = req.body
    try {
        const existingUser = await users.findOne({ email,password })
        if (existingUser) {
            const token = jwt.sign({id:existingUser._id},process.env.secretkey)
            res.status(200).json({existingUser,token})
        } else {
            res.status(406).json("Invalid email/password")
        }
    } catch (error) {
        res.status(404).json(error)

    }
}

