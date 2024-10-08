const Router = require("express");
const USERCONTROLLER = require("../../controller/user");

userRoute = Router();

// use named functions instead of lamda functions
userRoute.get("/getAllUser", USERCONTROLLER.getAllUsersController)
userRoute.post("/getOneUser", USERCONTROLLER.getOneUserController)
userRoute.post("/registerUser", USERCONTROLLER.registerUserController)
userRoute.put("/editTwoUsers", USERCONTROLLER.editTwoUserNamesController)
userRoute.patch("/editUserEmail", USERCONTROLLER.editUserEmailController)
userRoute.delete("/deleteUser", USERCONTROLLER.deleteUserController)
userRoute.post("/loginUser", USERCONTROLLER.loginUserController)
userRoute.patch("/checkFortID", USERCONTROLLER.checkFortIDController)
userRoute.patch("/editRankAndPref", USERCONTROLLER.editRankAndPrefController)

module.exports = userRoute