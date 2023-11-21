// express instance
const express  = require("express");
// router instance
const router = express.Router();

//import/fetch controller
const {createTodo} = require("../controllers/createTodo");
const {getTodo, getTodoById} = require("../controllers/getTodo");
const {updateTodo} =  require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo")

//define API routes and map it to controller
router.post("/createToDo", createTodo);
router.get("/getTodos", getTodo);
router.get("/getTodos/:id", getTodoById);
router.put("/updateToDo/:id" , updateTodo);
router.delete("/deleteTodo/:id", deleteTodo)
module.exports = router;