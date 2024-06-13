const jwt = require('jsonwebtoken')

const jwtMiddle = (req, res, next) => {
    try {
        const token = req.headers['authorization'].split(" ")[1]
        if (token) {
            const jwtResponse = jwt.verify(token, process.env.secretkey)
            req.payload = jwtResponse.id
            next()
        } else {
            res.status(406).json("Token is not Available")
        }
    } catch (error) {
        res.status(406).json("plz login first")

    }
}
module.exports = jwtMiddle