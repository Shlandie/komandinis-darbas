const express = require("express");
const router = express.Router();

const { getAllEarnings } = require("../controllers/incomeController");

router.route("/").get(getAllEarnings);

module.exports = router;