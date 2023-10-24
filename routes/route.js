import { Router } from "express";
import { addTask, deleteTask, editTask, getTask, singleTask } from "../controllers/controller.mjs";

const router = Router();

router.get('/', getTask);
router.post('/', addTask);
router.put('/:id', editTask);
router.delete('/:id', deleteTask);
router.get('/:id', singleTask);

export default router;