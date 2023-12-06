const Router = require("express");
const USERCONTROLLER = require("../../controller/user");

userRoute = Router();

// use named functions instead of lamda functions
userRoute.get("/getAllUser", USERCONTROLLER.getAllUsersController)
userRoute.post("/registerUser", USERCONTROLLER.registerUserController)
userRoute.put("/editTwoUsers", USERCONTROLLER.editTwoUserNames)

module.exports = userRoute