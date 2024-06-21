const Submission = require("../model/submission");

// Create a new submission with ResearcherID, ReviewerID, and CFPid
exports.createSubmission = async (req, res) => {
  try {
    const { CFPid, ResearcherID, ReviewerID } = req.body;
    const newSubmission = new Submission({ CFPid, ResearcherID, ReviewerID });
    await newSubmission.save();
    res.status(201).json(newSubmission);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add description and document to a submission
exports.addDescriptionAndDocument = async (req, res) => {
  try {
    const { id } = req.params; // submission ID
    const { Description, Document } = req.body;
    const submission = await Submission.findByIdAndUpdate(
      id,
      { Description, Document },
      { new: true }
    );
    if (!submission) {
      return res.status(404).json({ message: "Submission not found" });
    }
    res.status(200).json(submission);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a comment to a submission
exports.addComment = async (req, res) => {
  try {
    const { id } = req.params; // submission ID
    const { Comment } = req.body;
    const submission = await Submission.findByIdAndUpdate(
      id,
      { Comment },
      { new: true }
    );
    if (!submission) {
      return res.status(404).json({ message: "Submission not found" });
    }
    res.status(200).json(submission);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update the status of a submission
exports.updateStatus = async (req, res) => {
  try {
    const { id } = req.params; // submission ID
    const { Status } = req.body;
    const submission = await Submission.findByIdAndUpdate(
      id,
      { Status },
      { new: true }
    );
    if (!submission) {
      return res.status(404).json({ message: "Submission not found" });
    }
    res.status(200).json(submission);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get details of a submission by CFPid
exports.getDetailsByCFPid = async (req, res) => {
  try {
    const { CFPid } = req.params;
    const submissions = await Submission.find({ CFPid });
    if (!submissions) {
      return res.status(404).json({ message: "No submissions found" });
    }
    res.status(200).json(submissions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
