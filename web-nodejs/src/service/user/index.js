const USERREPO = require("../../repository/user")
const jwt = require('jsonwebtoken')

// name should reflect final stages of CRUD
const getAllUsers = async () => {
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

const deleteUser = async (payload) => {
    // making jwt


    // returning to controller
    const repoMsg = await USERREPO.deleteUser(payload);
    return repoMsg;
}

const loginUser = async (payload) => {
    try {
        const msg = await USERREPO.loginUser(payload);

        const jwtPayload = { msg: "THANK YOU" };
        const jwtSecret = process.env.JWT_SECRET || "I AM KEVIN";

        const accessToken = jwt.sign(jwtPayload, jwtSecret, { expiresIn: "1h" });

        console.log(accessToken)

        await USERREPO.saveToken({email: payload.email, token: accessToken})

        return { loginMsg: msg, accessToken };
    } catch (error) {
        console.log(error)
    }
};

module.exports = { getAllUsers, registerUser, editTwoUserNames, editUserEmail, deleteUser, getOneUser, loginUser }