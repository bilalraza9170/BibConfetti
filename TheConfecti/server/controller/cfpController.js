const CFP = require("../model/cfpModel");
const EmailController = require("./send_mail");
const ECController = require("./ecController");
const bcrypt = require("bcrypt");

// Create a new CFP entry
exports.createCFP = async (req, res) => {
  try {
    const cfp = new CFP(req.body);
    const savedCFP = await cfp.save();
    // res.json(savedCFP);

    console.log(savedCFP.ECname);

    var randomstring = Math.random().toString(36).slice(-8);

    const to = savedCFP.ECemail;
    const subject = `Welcome to BibConfetti, ${savedCFP.ECname}`;
    const text = `Hello ${savedCFP.ECname},\n\nYour account has been created as an Editorial Head for BibConfetti. Here is your password: ${randomstring}`;

    const hash = bcrypt.hashSync(randomstring, 5);

    const username = savedCFP.ECname;
    const email = savedCFP.ECemail;
    const password = hash;
    const Oname = savedCFP.conferenceName;
    const CFPid = savedCFP._id;

    // await ECuser.save();

    // Send email
    EmailController.sendEmail({ to, subject, text });
    // saving EC
    const savedEC = await ECController.createEC({
      username,
      email,
      password,
      Oname,
      CFPid,
    });
    res
      .status(200)
      .json({ message: "EC created successfully", ec: savedEC, CFP: savedCFP });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all CFP entries
exports.getAllCFP = async (req, res) => {
  try {
    const cfps = await CFP.find();
    res.json(cfps);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single CFP entry by ID
exports.getCFPById = async (req, res) => {
  try {
    const cfp = await CFP.findById(req.params.id);
    if (cfp === null) {
      return res.status(404).json({ message: "CFP not found" });
    }
    res.json(cfp);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a CFP entry by ID
exports.updateCFPById = async (req, res) => {
  try {
    const updatedCFP = await CFP.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (updatedCFP === null) {
      return res.status(404).json({ message: "CFP not found" });
    }
    res.json(updatedCFP);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a CFP entry by ID
exports.deleteCFPById = async (req, res) => {
  try {
    const deletedCFP = await CFP.findByIdAndDelete(req.params.id);
    if (deletedCFP === null) {
      return res.status(404).json({ message: "CFP not found" });
    }
    res.json({ message: "CFP deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
