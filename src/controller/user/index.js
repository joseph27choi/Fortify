const USERSERVICE = require("../../service/user")

const getAllUsersController = (req, res) => {
    // res.json({ msg: USERSERVICE.getAllUsers })
    res.json({ msg: USERSERVICE.getAllUsers() })
}

module.exports = {getAllUsersController} 