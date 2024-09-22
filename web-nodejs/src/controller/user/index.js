const USERSERVICE = require("../../service/user");

const getAllUsersController = async (req, res) => {
    /**
     * #swagger.tags = ['User']
     * #swagger.description = 'Get All Users from DB'
     */
    const allUserData = await USERSERVICE.getAllUsers();
    res.json({ msg: allUserData });
};

const getOneUserController = async (req, res) => {
    /**
     * #swagger.tags = ['User']
     * #swagger.description = 'Get One Specific User from DB'
     */
    const msg = await USERSERVICE.getOneUser(req.body);
    res.json({ msg });
};

const registerUserController = async (req, res) => {
    /**
    #swagger.tags = ['Users']
    #swagger.description = 'Add one User to DB'
    #swagger.parameters[''] = {
                    in: 'body',
                    schema: {
                        email: 'kevin@email.com',
                        name: 'Kevin',
                        password: 'password',
                        age: 32
                    }
    } 
    #swagger.responses[201] = {
                description: 'If Success',
                schema: {
                    message: 'Success!.'
                }
    } 
    #swagger.responses[400] = {
                description: 'If one of payload is empty',
                schema: {
                    message: "There is no payload on addUser() in user repository. "
                }
    } 
     */
    const msg = await USERSERVICE.registerUser(req.body);
    res.send({ msg: msg });
};


const editTwoUserNamesController = async (req, res) => {
        /**
    #swagger.tags = ['Users']
    #swagger.description = 'Edit Two Users at the same time'
    #swagger.parameters[''] = {
                    in: 'body',
                    schema: {
                        email: 'kevin@email.com',
                        name: 'Kevin',
                        password: 'password',
                        age: 32
                    }
    } 
    #swagger.responses[201] = {
                description: 'If Success',
                schema: {
                    message: 'Success!.'
                }
    } 
    #swagger.responses[400] = {
                description: 'If one of payload is empty',
                schema: {
                    message: "There is no payload on addUser() in user repository. "
                }
    } 
     */
    const msg = await USERSERVICE.editTwoUserNames(req.body);
    res.send({ msg });
};

const editUserEmailController = async (req, res) => {
    const msg = await USERSERVICE.editUserEmail(req.body);
    res.send({ msg });
};

const deleteUserController = async (req, res) => {
   
    const msg = await USERSERVICE.deleteUser(req.body);
    res.send({ msg });
};

const loginUserController = async (req, res) => {
    /**
    #swagger.tags = ['Users']
    #swagger.description = 'Add one User to DB'
    #swagger.parameters[''] = {
                    in: 'body',
                    schema: {
                        email: 'kevin@email.com',
                        password: 'password',
                    }
    } 
    #swagger.responses[201] = {
                description: 'If Success',
                schema: {
                    message: 'Success!.'
                }
    } 
    #swagger.responses[400] = {
                description: 'If one of payload is empty',
                schema: {
                    message: "There is no payload on addUser() in user repository. "
                }
    } 
     */
    const msg = await USERSERVICE.loginUser(req.body);
    console.log(msg)
    res.send({msg})
}

const checkFortIDController = async (req, res) => {
    const msg = await USERSERVICE.checkFortID(req.body);
    console.log(msg);
    res.send({msg})
}

const editRankAndPrefController = async (req, res) => {
    const msg = await USERSERVICE.editRankAndPref(req.body)
    console.log(msg);
    res.send({msg})
}

module.exports = {
    getAllUsersController,
    registerUserController,
    editTwoUserNamesController,
    editUserEmailController,
    deleteUserController,
    getOneUserController,
    loginUserController,
    checkFortIDController,
    editRankAndPrefController,
};
