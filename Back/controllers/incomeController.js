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

exports.deleteIncome = async (req, res) => {
  try {
    const { id } = req.params;
    const income = await Earning.findByIdAndDelete(id);

    if (!income) {
      return res.status(404).json({ msg: "No income with id:"  + id });
    } else {
      res.status(200).json({
        status: "success",
        message: "Income with id:"  + id + "deleted successfully.",
        income: income,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createNewIncome = async (req, res) => {
  try {
    const newIncome = await Earning.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        income: newIncome,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.updateIncome = async (req, res) => {
  try {
    const upatedIncome = await Earning.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json({
      status: "success",
      data: {
        income: upatedIncome,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};