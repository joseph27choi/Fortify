const express = require("express");
const mongoConnect = require("./src/config/mongo");
const INDEXROUTE = require("./src/router/index");

const app = express();

// connects with the DB
mongoConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/practice", INDEXROUTE)

app.get("/", (req, res) => {
  res.json({ message: "Hello, there" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});