const express = require("express");
const {
  updatedUser,
  getaUser,
  getallUser,
  loginUserCtrl,
  createUser,
  deleteaUser,
} = require("../Controller/Auth");
const { authMiddleware } = require("../Middlewares/authmiddleware");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUserCtrl);

router.get("/all-users", authMiddleware, getallUser);
router.get("/:id", authMiddleware, getaUser);

router.put("/edit-user", authMiddleware, updatedUser);
router.delete("/:id", authMiddleware, deleteaUser);

module.exports = router;
