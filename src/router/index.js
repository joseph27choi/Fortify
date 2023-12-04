const Router = require("express")
// import user
const USERROUTE = require("./user/index")

const indexRouter = Router();
indexRouter.use('/user', USERROUTE)

module.exports = indexRouter;