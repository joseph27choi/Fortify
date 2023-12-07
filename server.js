const express = require("express");
const DBConnect = require("./src/config/mongo");
const indexRouter = require("./src/router/index");
const { logger } = require("./src/config/winston");

const app = express();
DBConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/practice", indexRouter);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to first node server." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}.`);
});