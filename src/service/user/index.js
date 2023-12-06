const USERREPO = require("../../repository/user")

// name should reflect final stages of CRUD
const getAllUsers  = async () => {
    const users = await USERREPO.getAllUsers();
    return users;
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

module.exports = { getAllUsers, registerUser, editTwoUserNames }