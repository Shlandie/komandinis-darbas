const { Earning } = require("../models/models");

exports.getAllEarnings = async (req, res) => {
    try {
      const allEarnings = await Earning.find();
      res.status(200).json({
        status: "success",
        results: allEarnings.length,
        data: {
          earnings: allEarnings,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: "fail",
        message: err.message,
      });
    }
  };