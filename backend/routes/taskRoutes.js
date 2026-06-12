const express = require("express");

const router = express.Router();

const {
  createTask,
  getMyTasks,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, createTask);

router.get("/", authMiddleware, getMyTasks);

router.put("/:id", authMiddleware, updateTask);

router.delete("/:id", authMiddleware, deleteTask);

module.exports = router;