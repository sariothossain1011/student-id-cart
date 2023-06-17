const express = require("express");
const { register, find } = require("../controller/UsersController");
const router = express.Router()



router.post("/register",register)
router.get("/find/:id",find)



module.exports = router
