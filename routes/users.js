const userRouter = require("express").Router(); // creating a router
const { getCurrentUser, updateProfile } = require("../controllers/users");
const  auth  = require("../middlewares/auth");

userRouter.get("/me", auth, getCurrentUser);
userRouter.patch("/me", auth, updateProfile);
module.exports = userRouter;