const express = require("express");
const router = express.Router();

const TodoController = require('../controllers/todos');

// Handle incoming GET requests to /orders
router.get("/", TodoController.get_all);

router.post("/create",  TodoController.create_todo);

router.post("/delete/:id", TodoController.delete_todo);

module.exports = router;