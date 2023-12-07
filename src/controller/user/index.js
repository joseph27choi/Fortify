const USERSERVICE = require("../../service/user")

const getAllUsersController = async (req, res) => {
    const allUserData = await USERSERVICE.getAllUsers()
    res.json({ msg: allUserData })
}

const getOneUserController = async (req, res) => {
    const msg = await USERSERVICE.getOneUser(req.body)
    res.json({ msg })
}

// controller communicates with front end
const registerUserController = async (req, res) => {
    const msg = await USERSERVICE.registerUser(req.body);
    res.send({ msg: msg });
}

// put API
const editTwoUserNamesController = async (req, res) => {
    const msg = await USERSERVICE.editTwoUserNames(req.body)
    res.send({ msg });
}

const editUserEmailController = async( req, res ) => {
    const msg = await USERSERVICE.editUserEmail(req.body)
    res.send({msg})
}

const deleteUserController = async(req, res) => {
    const msg = await USERSERVICE.deleteUser(req.body)
    res.send({msg})
}

module.exports = { getAllUsersController, registerUserController, editTwoUserNamesController, editUserEmailController, deleteUserController, getOneUserController } 