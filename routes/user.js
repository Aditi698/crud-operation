import express from "express";
import User from "../models/User.js";
const router = express.Router();

// URL: http://localhost:7777/users/create
router.post("/create", async (req, res) => {
  const data = req.body;

  try {
    const newUser = new User(data);
    const savedUser = await newUser.save();

    res.status(201).json({
      data: savedUser,
      message: "User Created",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "User failed to create" });
  }
});

// URL: http://localhost:7777/users/find/id
router.get("/find/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (user) {
      return res.status(200).json({ data: user, message: "User Found" });
    } else return res.status(200).json({ message: "User Not Found" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error fetching user. Try again." });
  }
});

// URL: http://localhost:7777/users/update/id
router.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { ...data } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      data: updatedUser,
      message: "User has been updated successfully.",
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "User was not updated. Try again." });
  }
});

// URL: http://localhost:7777/users/delete/id
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      data: deletedUser,
      message: "User has been deleted successfully.",
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "User was not deleted. Try again." });
  }
});

export default router;
