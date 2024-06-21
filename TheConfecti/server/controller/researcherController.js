const User = require("../model/researcher");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const CFP = require("../model/cfpModel");

const { CreateError } = require("../utilis/createError");

const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({
      ...req.body,
      password: hash,
    });
    await newUser.save();
    res.status(201).send("User has been Created!");
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) return next(CreateError(404, "user not found"));

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect) return next(400, "wrong password or username!");

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_KEY
    );

    const { password, ...info } = user._doc;
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .send(info);
  } catch (error) {
    next(error);
  }
};

const verifyAndUpdate = async (req, res) => {
  try {
    const { code, user_id } = req.body;

    // Find the CFP with the provided joining code
    const cfp = await CFP.findOne({ CFPjoiningcode: code });

    if (!cfp) {
      return res.status(404).json({ message: "Invalid joining code" });
    }

    // Update the user with the found CFPid
    // await User.findOneAndUpdate({}, { CFPid: cfp._id });
    const user = await User.findByIdAndUpdate(
      user_id,
      { CFPid: cfp._id },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res
      .status(200)
      .json({ message: "Joining code verified successfully", CFPid: cfp._id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  register,
  login,
  verifyAndUpdate,
};
