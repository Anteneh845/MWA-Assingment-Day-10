const express = require("express");
const router = express.Router();
const {
    deleteUserById,
    createUser,
    getUser,
    updateUser,
    authenticateUser
} = require("../controllers/user.controller")

const {
    createUserValidator,
    updateUserValidator,
    userUrlValidator,
    authenticateUserValidator
} = require("../middlewares/request-validators/user.validator")

const {authenticate} = require("../middlewares/auth-handlers/auth-handler")

// User routes
router
    .post("/users/", createUserValidator, createUser)
    .get("/users/me", authenticate, getUser)
    .delete("/users/:_id", userUrlValidator, deleteUserById)
    .put("/users/:_id", authenticate, updateUserValidator, updateUser)
    .patch("/users/:_id", authenticate, updateUserValidator, updateUser)

//auth route
router.post("/auth", authenticateUserValidator, authenticateUser)

module.exports = router;