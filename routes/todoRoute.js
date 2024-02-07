import express from "express";
import * as todoController from "../controllers/todoController.js";

const router = express.Router();

router.post("/todo", todoController.createTodo);
router.get("/todos", todoController.getAllTodos);
router.put("/todo/:id", todoController.updateTodo);
router.delete("/todo/:id", todoController.deleteTodo);
router.get("/todo/:id", todoController.getTodo);

export default router;
