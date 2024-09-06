const itemRouter = require("express").Router(); // creating a router
const {
  getItems,
  createItem,
  deleteItem,
} = require("../controllers/clothingItems.js");
itemRouter.get("/", getItems);

itemRouter.post("/", createItem);

itemRouter.delete("/:itemId", deleteItem);
module.exports = itemRouter;
