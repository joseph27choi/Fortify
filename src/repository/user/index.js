// connect repository to database by using schema constructor
const { User } = require("../../dtos")

const getAllUsers = async () => {
    const allUsers = await User.find({});
    // what does the {} do? probably node syntax
    return allUsers;
}

const registerUser = async (payload) => {
    const { email, name, age, password } = payload;
    try {
        if (!email || !name || !age || !password) {
            console.log("registerUser() invalid payload")
            return "failed, check registerUser()"
        }
        // check if duplicates exist
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            console.log(`registerUser() ${email} already exists`)
            return "failed, already existing user, check registerUser()"
        }

        // construct a new user in the exact model
        const newUser = new User({ email: email, name: name, age: age, password: password })
        // save() is the posting keyword
        await newUser.save();
        console.log("pushed")

        return "success"
    }
    catch (e) {
        return ("registerUser() has error ", e)
    }
}

const editTwoUserNames = async (payload) => {
    const { user1, user2 } = payload;
    try {
        if (!user1 || !user2) {
            console.log("there is no payload on editTwoUserNames()")
            console.log("User1: " + user1, "User2: " + user2)
            return "failed, check payload";
        }
        const { email1, replacementName1 } = user1
        const { email2, replacementName2 } = user2
        if (!email1 || !email2 || !replacementName1 || !replacementName2) {
            console.log("incorrect syntax payload on editTowUserNames()")
            console.log("user1: " + email1, "Replacement1: " + replacementName1)
            console.log("user2: " + email2, "Replacement2: " + replacementName2)
            return "failed, invalid payload syntax";
        }

        const foundUser1 = await User.findOne({ "email": email1 })
        if (!foundUser1) {
            console.log(`login(): ${email1} is not found.`);
            return "failed, user1 does not exist";
        }

        const foundUser2 = await User.findOne({ "email": email2 })
        if (!foundUser2) {
            console.log(`login(): ${email2} is not found.`);
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
        console.log("error in editTwoUser()" + e)
        return "editTwoUser() has error " + e;
    }

}

const editUserEmail = async (payload) => {
    const { email, replacementEmail } = payload;
    console.log(replacementEmail)
    try {
        // check syntax
        if (!email || !replacementEmail) {
            console.log(`check editUserEmail() email: ${email} or replacement: ${replacementEmail}`)
            return "failed, check editUserEmail(), incorrect syntax"
        }

        // check if user exists
        const existingUser = await User.findOne({ email })
        console.log(existingUser);
        if (!existingUser) {
            console.log('failed, check editUserEmail(), user does not exist')
            return 'failed, editUserEmail(), user not found'
        }

        // time to edit 
        await User.updateOne({ email: email }, { $set: { email: replacementEmail } })

        return 'success'
    }
    catch (e) {
        console.log(`failed, check editUserEmail() error: ${e}`)
        return `check editUserEmail() ${e}`;
    }
}

const deleteUser = async (payload) => {
    const { email } = payload;
    try {
        // see syntax
        if (!email) {
            console.log('failed, check deleteUser(), no email entered')
            return ('failed, check deleteUser(), no email entered')
        }

        // see if user exists
        const existingUser = User.findOne({email})
        if (!existingUser) {
            console.log('failed, check deleteUser(), no user found')
            return ('failed, check deleteUser(), no user found')
        }

        // now make database changes
        await User.deleteOne({ email: email})

        return "success"
    }
    catch(e) {
        console.log(e)
        return `error in deleteUser() ${e}`
    }
    return "reached repo";
}


module.exports = { getAllUsers, registerUser, editTwoUserNames, editUserEmail, deleteUser }