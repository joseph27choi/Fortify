const USERREPO = require("../../repository/user")

// name should reflect final stages of CRUD
const getAllUsers  = async () => {
    const users = await USERREPO.getAllUsers();
    return users;
}

const getOneUser = async (payload) => {
    const repoMsg = await USERREPO.getOneUser(payload);
    return repoMsg;
}

// only job is to connect
const registerUser = async (payload) => {
    const repoMsg = await USERREPO.registerUser(payload);
    return repoMsg;
}

const editTwoUserNames = async (payload) => {
    const repoMsg = await USERREPO.editTwoUserNames(payload);
    return repoMsg
}

const editUserEmail = async (payload) => {
    const msg = await USERREPO.editUserEmail(payload);
    return msg;
}

const deleteUser = async(payload) => {
    const repoMsg = await USERREPO.deleteUser(payload);
    return repoMsg;
}

module.exports = { getAllUsers, registerUser, editTwoUserNames, editUserEmail, deleteUser, getOneUser }