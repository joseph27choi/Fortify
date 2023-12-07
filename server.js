const express = require("express");
const DBConnect = require("./src/config/mongo");
const indexRouter = require("./src/router/index");
const { logger } = require("./src/config/winston");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./src/config/swagger-output.json");

const app = express();
DBConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/practice", indexRouter);
app.use(
  "/practice-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerFile, { explorer: true })
);

app.get("/", (req, res) => {
  /**
  #swagger.tags = ['Welcome']
  #swagger.description = 'This is just a simple welcome Sentence'
 */
  res.json({ message: "Welcome to first node server." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}.`);
});