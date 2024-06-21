const EC = require("../model/EC");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const reviewerController = require("./reviewerController");
const EmailController = require("./send_mail");
const { CreateError } = require("../utilis/createError");

exports.createEC = async ({ username, email, password, Oname, CFPid }) => {
  try {
    // Create a new EC entry
    const ec = new EC({
      username,
      email,
      password,
      Oname,
      CFPid,
    });

    // Save the EC data
    const savedEC = await ec.save();
    return savedEC;
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.login_ec = async (req, res, next) => {
  try {
    const user = await EC.findOne({ email: req.body.email });

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

exports.createReviewer = async (req, res, next) => {
  try {
    // Your code here
    const { username, email, field } = req.body;

    var randomstring = Math.random().toString(36).slice(-8);

    const to = req.body.email;
    const subject = `Welcome to BibConfetti, ${req.body.username}`;
    const text = `Hello ${req.body.username},\n\nYour account has been created as an Reviewer in BibConfetti. Here is your password: ${randomstring}`;

    await EmailController.sendEmail({ to, subject, text });

    const hash = bcrypt.hashSync(randomstring, 5);
    req.body.password = hash;

    const { id } = req.params;
    const ECuser = await EC.findById(req.userId);
    if (!ECuser) {
      return res.status(404).json({ message: "not found ECuser" });
    }

    req.body.Oname = ECuser.Oname;
    req.body.CFPid = ECuser.CFPid;

    // console.log(ECuser)

    // console.log(req.body.username)
    // console.log(req.body.email)
    // console.log(req.body.password)
    // console.log(req.body.Oname)
    // console.log(req.body.field)
    // console.log(req.body.CFPid)

    // Call the createReviewer function from the controller
    const savedReviewer = await reviewerController.createReviewer(
      username,
      email,
      req.body.password,
      req.body.Oname,
      req.body.CFPid,
      field
    );

    // Send response back to the client
    res.send(savedReviewer); // Assuming 201 for successful creation
  } catch (err) {
    // Handle error
    next(err);
    CreateError(res.status(500), err);
  }
};
