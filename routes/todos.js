
import express from "express";
import authorize from "../middleware/authorize.js";
import {
    getTodo, 
    getTodos, 
    createTodo, 
    updateTodo, 
    deleteTodo} from"../controllers/todosController.js";
import { createTodoRules, updateTodoRules} from "../middleware/validator.js";
import {validateResult} from "../middleware/validationResult.js";

const router = express.Router();

router.get("/:id", authorize, getTodo);

router.get("/:id", authorize, getTodos);

router.post("/:id", authorize,createTodoRules,validateResult, createTodo);

router.put("/:id", authorize, updateTodoRules, validateResult,updateTodo);

router.delete("/:id", authorize, deleteTodo);


export default router;

