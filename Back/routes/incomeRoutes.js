const express = require("express");
const router = express.Router();

const { getAllEarnings, deleteIncome, createNewIncome, updateIncome } = require("../controllers/incomeController");

router.route("/").get(getAllEarnings);
router.route("/:id").delete(deleteIncome);
router.route("/").post(createNewIncome);
router.route("/:id").patch(updateIncome);

module.exports = router;