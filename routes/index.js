const indexRouter = require("express").Router(); // creating a router
const userRouter = require("./users");
const itemRouter = require("./clothingitems");
const { documentNotFound } = require("../utils/errors");
const { login, createUser } = require("../controllers/users");

indexRouter.use("/users", userRouter);
indexRouter.use("/items", itemRouter);
indexRouter.post("/signin", login);
indexRouter.post("/signup", createUser);
indexRouter.use((req, res) =>
  res.status(documentNotFound).send({ message: "Source Not Found" })
); // no need for next(), since the middleware direcrtly sends a res and no pass control to further middleware.

module.exports = indexRouter;
