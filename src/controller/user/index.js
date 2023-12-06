const USERSERVICE = require("../../service/user")

const getAllUsersController = async (req, res) => {
    const allUserData = await USERSERVICE.getAllUsers()
    res.json({ msg: allUserData })
}

// controller communicates with front end
const registerUserController = async (req, res) => {
    const msg = await USERSERVICE.registerUser(req.body);
    res.send({ msg: msg });
}

// put API
const editTwoUserNames = async (req, res) => {
    const msg = await USERSERVICE.editTwoUserNames(req.body)
    res.send({ msg });
}

module.exports = { getAllUsersController, registerUserController, editTwoUserNames } 