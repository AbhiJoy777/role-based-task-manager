const authMiddleware = (req, res, next) => {
  req.user = {
    id: "123",
    role: "Admin",
  };

  next();
};

module.exports = authMiddleware;