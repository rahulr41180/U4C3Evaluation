
const express = require("express");

const app = express();

const UserController = require("./controllers/user.controller");

const BookController = require("./controllers/book.controller")

app.use(express.json());

app.use("/users", UserController);

app.use("/books", BookController);

module.exports = app;