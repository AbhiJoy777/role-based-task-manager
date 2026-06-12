const express = require("express");

const router = express.Router();

const {
  getAllUsers,
  getAllTasks,
  deleteUser,
  updateUserStatus,
} = require("../controllers/adminController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

router.get("/users", authMiddleware, adminMiddleware, getAllUsers);

router.get("/tasks", authMiddleware, adminMiddleware, getAllTasks);

router.delete("/users/:id", authMiddleware, adminMiddleware, deleteUser);

router.put(
  "/users/:id/status",
  authMiddleware,
  adminMiddleware,
  updateUserStatus
);

module.exports = router;