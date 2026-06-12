const User = require("../models/User");
const Task = require("../models/Task");

const getAllUsers = async (req, res) => {
  res.json({
    message: "Get all users",
  });
};

const getAllTasks = async (req, res) => {
  res.json({
    message: "Get all tasks",
  });
};

const deleteUser = async (req, res) => {
  res.json({
    message: "Delete user",
  });
};

const updateUserStatus = async (req, res) => {
  res.json({
    message: "Update user status",
  });
};

module.exports = {
  getAllUsers,
  getAllTasks,
  deleteUser,
  updateUserStatus,
};