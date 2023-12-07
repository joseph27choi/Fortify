// connect repository to database by using schema constructor
const { User } = require("../../dtos")

const getAllUsers = async () => {
    try {
        const allUsers = await User.find({});
        if (!allUsers) {
            logger.error(`failed, check getAllUsers(), cannot reach`)
            return "cannot reach"
        }
        // what does the {} do? probably node syntax
        return allUsers;
    }
    catch (e) {
        logger.error(e)
        return `error in getAllUsers() ${e}`
    }
}

const getOneUser = async (payload) => {
    const {email} = payload;
    try {
        if (!email) {
            logger.error("syntax error getOneUser()")
            return ("syntax error getOneUser()")
        }
        const oneUser = await User.find({email});
        if (!oneUser) {
            logger.error(`failed, check getOneUser(), user does not exist`)
            return (`failed, check getOneUser(), user does not exist`)
        }

        // what does the {} do? probably node syntax
        return oneUser;
    }
    catch (e) {
        logger.error(e)
        return `error in getAllUsers() ${e}`
    }
}

const registerUser = async (payload) => {
    const { email, name, age, password } = payload;
    try {
        if (!email || !name || !age || !password) {
            logger.error("registerUser() invalid payload")
            return "failed, check registerUser()"
        }
        // check if duplicates exist
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            logger.error(`registerUser() ${email} already exists`)
            return "failed, already existing user, check registerUser()"
        }

        // construct a new user in the exact model
        const newUser = new User({ email: email, name: name, age: age, password: password })
        // save() is the posting keyword
        await newUser.save();

        return "success"
    }
    catch (e) {
        logger.error(e)
        return ("registerUser() has error ", e)
    }
}

const editTwoUserNames = async (payload) => {
    const { user1, user2 } = payload;
    try {
        if (!user1 || !user2) {
            logger.error("there is no payload on editTwoUserNames()")
            logger.error("User1: " + user1, "User2: " + user2)
            return "failed, check payload";
        }
        const { email1, replacementName1 } = user1
        const { email2, replacementName2 } = user2
        if (!email1 || !email2 || !replacementName1 || !replacementName2) {
            logger.error("incorrect syntax payload on editTowUserNames()")
            logger.error("user1: " + email1, "Replacement1: " + replacementName1)
            logger.error("user2: " + email2, "Replacement2: " + replacementName2)
            return "failed, invalid payload syntax";
        }

        const foundUser1 = await User.findOne({ "email": email1 })
        if (!foundUser1) {
            logger.error(`login(): ${email1} is not found.`);
            return "failed, user1 does not exist";
        }

        const foundUser2 = await User.findOne({ "email": email2 })
        if (!foundUser2) {
            logger.error(`login(): ${email2} is not found.`);
            return "failed, user2 does not exist";
        }
        // by this point, user entered valid payload with two existing users
        /* I want to replace foundUser1 with nameToChange1*/
        /* I want to replace foundUser2 with nameToChange2*/

        await User.updateOne({ email: foundUser1.email }, { $set: { name: replacementName1 } });
        await User.updateOne({ email: foundUser2.email }, { $set: { name: replacementName2 } });

        return "success";
    }
    catch (e) {
        logger.error("error in editTwoUser()" + e)
        return "editTwoUser() has error " + e;
    }

}

const editUserEmail = async (payload) => {
    const { email, replacementEmail } = payload;
    try {
        // check syntax
        if (!email || !replacementEmail) {
            logger.error(`check editUserEmail() email: ${email} or replacement: ${replacementEmail}`)
            return "failed, check editUserEmail(), incorrect syntax"
        }

        // check if user exists
        const existingUser = await User.findOne({ email })
        logger.error(existingUser);
        if (!existingUser) {
            logger.error('failed, check editUserEmail(), user does not exist')
            return 'failed, editUserEmail(), user not found'
        }

        // time to edit 
        await User.updateOne({ email: email }, { $set: { email: replacementEmail } })

        return 'success'
    }
    catch (e) {
        logger.error(`failed, check editUserEmail() error: ${e}`)
        return `check editUserEmail() ${e}`;
    }
}

const deleteUser = async (payload) => {
    const { email } = payload;
    try {
        // see syntax
        if (!email) {
            logger.error('failed, check deleteUser(), no email entered')
            return ('failed, check deleteUser(), no email entered')
        }

        // see if user exists
        const existingUser = User.findOne({email})
        if (!existingUser) {
            logger.error('failed, check deleteUser(), no user found')
            return ('failed, check deleteUser(), no user found')
        }

        // now make database changes
        await User.deleteOne({ email: email})

        return "success"
    }
    catch(e) {
        logger.error(e)
        return `error in deleteUser() ${e}`
    }
}


module.exports = { getAllUsers, registerUser, editTwoUserNames, editUserEmail, deleteUser, getOneUser }