const USERREPO = require("../../repository/user")

// name should reflect final stages of CRUD
const getAllUsers  = () => {
    const users = USERREPO.getAllUsers();
    console.log("here")
    return users;
}


module.exports = { getAllUsers }