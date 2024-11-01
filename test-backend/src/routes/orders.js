const express = require("express");
const { getOrdersByUser } = require("../controllers/getOrdersByUser");
const { createOrderByUser } = require("../controllers/createOrdersByUser");

const orderRouter = express.Router();

orderRouter.get("/orders", getOrdersByUser);
orderRouter.post("/orders", createOrderByUser);

module.exports = orderRouter;