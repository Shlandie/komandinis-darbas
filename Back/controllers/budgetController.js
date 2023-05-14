const { Budget } = require("../models/models");

exports.getAllBudget = async (req, res) => {
    try {
        const allBudget = await Budget.find();
        res.status(200).json({
            status: "success",
            results: allBudget.length,
            data: {
              earnings: allBudget,
            },
          });
        } catch (err) {
          res.status(500).json({
            status: "fail",
            message: err.message,
          });
        }
      };