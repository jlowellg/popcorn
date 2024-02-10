const jwt = require("jsonwebtoken");
const cookies = require("./cookies");

const verifyToken = (req, res, next) => {
  const token = cookies.get("token");

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Invalid token" });
    }

    req.username = decoded;
    next();
  });
};

module.exports = verifyToken;
