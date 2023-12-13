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
     * #swagger.description = 'Get One User from DB'
     * #swagger.parameters[''] = {
     *     in: 'body',
     *     schema: {
     *         "email": "jokerchoi@gmail.com"
     *     }
     * }
     * #swagger.responses[201] = {
     *     description: 'If Success',
     *     schema: {
     *         message: 'Success!.'
     *     }
     * } 
     * #swagger.responses[400] = {
     *     description: 'If one of payload is empty',
     *     schema: {
     *         message: "There is no payload on addUser() in user repository. "
     *     }
     * } 
     */
    const msg = await USERSERVICE.getOneUser(req.body);
    res.json({ msg });
};

// controller communicates with front end
const registerUserController = async (req, res) => {
    /**
     * #swagger.tags = ['User']
     * #swagger.description = 'Add one User to DB'
     * #swagger.parameters[''] = {
     *     in: 'body',
     *     schema: {
     *         email: 'kevin@email.com',
     *         name: 'Kevin',
     *         age: 32,
     *         password: 'apple'
     *     }
     * } 
     * #swagger.responses[201] = {
     *     description: 'If Success',
     *     schema: {
     *         message: 'Success!.'
     *     }
     * } 
     * #swagger.responses[400] = {
     *     description: 'If one of payload is empty',
     *     schema: {
     *         message: "There is no payload on addUser() in user repository. "
     *     }
     * } 
     */
    const msg = await USERSERVICE.registerUser(req.body);
    res.send({ msg: msg });
};

// put API
const editTwoUserNamesController = async (req, res) => {
    /**
     * #swagger.tags = ['User']
     * #swagger.description = 'Get One User from DB'
     * #swagger.parameters[''] = {
     *     in: 'body',
     *     schema: {
     *         "user1": {
     *             "email1": "jojochoi@gmail.com",
     *             "replacementName1": "joker"
     *         },
     *         "user2": {
     *             "email2": "tanveer78@gmail.com",
     *             "replacementName2": "tanned"
     *         }
     *     }
     * }   
     * #swagger.responses[201] = {
     *     description: 'If Success',
     *     schema: {
     *         message: 'Success!.'
     *     }
     * } 
     * #swagger.responses[400] = {
     *     description: 'If one of payload is empty',
     *     schema: {
     *         message: "There is no payload on addUser() in user repository. "
     *     }
     * } 
     */
    const msg = await USERSERVICE.editTwoUserNames(req.body);
    res.send({ msg });
};

const editUserEmailController = async (req, res) => {
    /**
     * #swagger.tags = ['User']
     * #swagger.description = 'Get One User from DB'
     * #swagger.parameters[''] = {
     *     in: 'body',
     *     schema: {
     *         "email": "jojochoi@gmail.com",
     *         "replacementEmail": "jokerchoi@gmail.com"
     *     }
     * }
     * #swagger.responses[201] = {
     *     description: 'If Success',
     *     schema: {
     *         message: 'Success!.'
     *     }
     * } 
     * #swagger.responses[400] = {
     *     description: 'If one of payload is empty',
     *     schema: {
     *         message: "There is no payload on addUser() in user repository. "
     *     }
     * } 
     */
    const msg = await USERSERVICE.editUserEmail(req.body);
    res.send({ msg });
};

const deleteUserController = async (req, res) => {
    /**
     * #swagger.tags = ['User']
     * #swagger.description = 'Get One User from DB'
     * #swagger.parameters[''] = {
     *     in: 'body',
     *     schema: {
     *         "email": "navtaj6969@gmail.com"
     *     }
     * }
     * #swagger.responses[201] = {
     *     description: 'If Success',
     *     schema: {
     *         message: 'Success!.'
     *     }
     * } 
     * #swagger.responses[400] = {
     *     description: 'If one of payload is empty',
     *     schema: {
     *         message: "There is no payload on addUser() in user repository. "
     *     }
     * } 
     */
    const msg = await USERSERVICE.deleteUser(req.body);
    res.send({ msg });
};

const loginUserController = async (req, res) => {
    const msg = await USERSERVICE.loginUser(req.body);
    console.log(msg)
    res.send({msg})
}


module.exports = {
    getAllUsersController,
    registerUserController,
    editTwoUserNamesController,
    editUserEmailController,
    deleteUserController,
    getOneUserController,
    loginUserController
};
