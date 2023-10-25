import { Router } from "express";
import { addTask, deleteTask, editTask, getTask, singleTask } from "../controllers/controller.mjs";
import { upload } from "../middleware/multer.js";

const router = Router();

router.get('/tasks', getTask);
router.post('/', upload.single('image'), addTask);
router.put('/:id', upload.single('image'), editTask);
router.delete('/:id', deleteTask);
router.get('/:id', singleTask);

export default router;