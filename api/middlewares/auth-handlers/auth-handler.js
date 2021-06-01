const {verify} = require("jsonwebtoken")

module.exports.authenticate = (req, res, next) => {
    if (!req.headers.authorization.split(" ")[1]) {
        res.status(403).json({message: "Forbidden request"})
    } else {
        const token = req.headers.authorization.split(" ")[1];
        if (token) {
            verify(token, "SECRET", (err, decoded) => {
                if (err)
                    res.status(403).json({message:"Forbidden request"})
                else {
                    next();
                }
            })
        } else {
            res.status(403).json({message: "Forbidden request"});
        }
    }
}