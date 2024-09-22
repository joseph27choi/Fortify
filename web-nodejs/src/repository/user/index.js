// connect repository to database by using schema constructor
const { User } = require("../../dtos")
const { logger } = require("../../config/winston");
const { CustomException, getStatusCode } = require("../../config/exceptions");
const bcrypt = require("bcrypt")

const getAllUsers = async () => {
    try {
        const allUsers = await User.find({});
        if (!allUsers) {
            logger.error(`getAllUsers(): no users exist in db`)
            return [];
        }
        return allUsers;
    }
    catch (e) {
        logger.error(`error in getAllUsers ${e}`)
        throw new CustomException(getStatusCode.SERVER_ERROR);
    }
}

const getOneUser = async (payload) => {
    const { email } = payload;
    try {
        if (!email) {
            logger.error("syntax error getOneUser()")
            return ("syntax error getOneUser()", payload)
        }
        const oneUser = await User.findOne({ email });
        if (!oneUser) {
            logger.error(`failed, check getOneUser(), user does not exist`)
            return (`failed, check getOneUser(), user does not exist`)
        }

        // what does the {} do? probably node syntax
        return oneUser;
    }
    catch (e) {
        logger.error(`error in getOneUser() ${e}`)
        return `error in getOneUser() ${e}`
    }
}

const registerUser = async (payload) => {
    const { email, name, age, password } = payload;
    try {
        if (!email || !name || !age || !password) {
            logger.error("registerUser() invalid payload")
            return CustomException(getStatusCode.BAD_REQUEST)
        }

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            logger.error(`registerUser() ${email} already exists`)
            return CustomException(getStatusCode.DUPLICATE_ID)
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ email: email, name: name, age: age, password: hashedPassword })
        await newUser.save();

        return "success"
    }
    catch (e) {
        logger.error(`error in registerUser() ${e}`)
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
        logger.error(`failed, check editUserEmail() ${e}`)
        return `check editUserEmail() ${e}`;
    }
}

// https://cloud.mongodb.com/v2/656e978a1241d27b5da483aa#/overview
const deleteUser = async (payload) => {
    const { email } = payload;
    try {
        // see syntax
        if (!email) {
            logger.error('failed, check deleteUser(), no email entered')
            return ('failed, check deleteUser(), no email entered')
        }

        // see if user exists
        const existingUser = User.findOne({ email })
        if (!existingUser) {
            logger.error('failed, check deleteUser(), no user found')
            return ('failed, check deleteUser(), no user found')
        }

        // now make database changes
        await User.deleteOne({ email: email })

        return "success"
    }
    catch (e) {
        logger.error(`error in deleteUser() ${e}`)

        return `error in deleteUser() ${e}`
    }
}

const loginUser = async (payload) => {
    const { email, password } = payload;
    try {
        const requiredFields = ["email", "password"];
        validatePayload(payload, requiredFields);

        const foundUser = await findUserByEmail(email);

        const passwordMatch = await bcrypt.compare(password, foundUser.password);

        if (!passwordMatch) {
            logger.error(`login(): Password mismatch for ${email}.`);
            return CustomException(getStatusCode.UNAUTHORIZED);
        }
        return CustomException(getStatusCode.OK);
    } catch (error) {
        logger.error("login() has error" + error);
        return CustomException(getStatusCode.SERVER_ERROR);
    }
};

const checkFortID = async (payload) => {
    const { email, fortID } = payload;
    try {
        if (!email || !fortID) {
            logger.error("checkFortID() invalid payload")
            return "failed, check checkFortID()"
        }

        // check if duplicates exist
        const existingUser = await User.findOne({ fortID })

        if (existingUser) {
            logger.error(`registerUser() ${fortID} already exists`)
            return "failed, already existing user, check checkFortID()"
        }

        await User.updateOne({ email: email }, { $set: { fortID: fortID } })
        return 'success'
    }
    catch (e) {
        logger.error(`error in checkFortID() ${e}`)
        return ("checkFortID() has error ", e)
    }
}

const editRankAndPref = async (payload) => {
    const {email, mainWeapon, rank, crewPref} = payload;

    try {
        if (!email || !mainWeapon || !rank || !crewPref) {
            logger.error("editRankAndPref() invalid payload")
            return "failed, check editRankAndPref()"
        }

        await User.updateOne({ email: email }, { $set: { mainWeapon, rank, crewPref } })
        return 'success'
    }
    catch (e) {
        logger.error(`error in editRankAndPref() ${e}`)
        return ("editRankAndPref() has error ", e)
    }
}

const saveToken = async (payload) => {
    const { email, token } = payload;
    try {
        if (!email || !token) {
            logger.error("Payload error on saveToken() in user repository");
            return CustomException(getStatusCode.BAD_REQUEST);
        }

        const foundUser = await User.findOne({ email });
        if (!foundUser) {
            logger.error(`saveToken(): ${email} is not registered user.`);
            return CustomException(getStatusCode.NOT_FOUND);
        }

        await User.findOneAndUpdate({ email }, { $set: { token } });

        return CustomException(getStatusCode.CREATED)
    } catch (error) {
        logger.error("saveToken() has error" + error);
        return CustomException(getStatusCode.SERVER_ERROR);
    }
};


// internal
const validatePayload = (payload, requiredFields) => {
    for (const field of requiredFields) {
        if (!payload[field]) {
            logger.error(`Payload error: ${field} is missing.`);
            return CustomException(getStatusCode.BAD_REQUEST);
        }
    }
};

const findUserByEmail = async (email) => {
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
        logger.error(`User not found for email: ${email}`);
        return CustomException(getStatusCode.NOT_FOUND);
    }
    return foundUser;
};

module.exports = {
    getAllUsers,
    registerUser,
    editTwoUserNames,
    editUserEmail,
    deleteUser,
    getOneUser,
    loginUser,
    checkFortID,
    editRankAndPref,
    saveToken
}