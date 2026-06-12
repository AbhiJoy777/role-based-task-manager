const createTask = async (req, res) => {
  res.json({
    message: "Task created",
  });
};

const getMyTasks = async (req, res) => {
  res.json({
    message: "My tasks",
  });
};

const updateTask = async (req, res) => {
  res.json({
    message: "Task updated",
  });
};

const deleteTask = async (req, res) => {
  res.json({
    message: "Task deleted",
  });
};

module.exports = {
  createTask,
  getMyTasks,
  updateTask,
  deleteTask,
};