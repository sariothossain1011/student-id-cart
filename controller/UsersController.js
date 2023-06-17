const UsersModel = require("../models/UsersModel");

exports.register = async (req, res) => {
  try {
    let reqBody = req.body;
    const data = await UsersModel.create(reqBody);
    res.status(200).json({ status: "success", data: data });
  } catch (error) {
    res.status(400).json({ status: "fail", data: error });
  }
};


exports.find = async (req, res) => {
  try {
    const data = await UsersModel.find({ _id: req.params.id }).select("-password");
    res.status(200).json({ status: "success", data: data });
  } catch (error) {
    res.status(400).json({ status: "fail", data: error.toString() });
  }
};
