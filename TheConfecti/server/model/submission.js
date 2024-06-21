const mongoose = require("mongoose");
const { Schema } = mongoose;

const submissionSchema = new Schema(
  {
    CFPid: {
      type: String,
      required: true,
    },
    ResearcherID: {
      type: String,
      required: true,
    },
    ReviewerID: {
      type: String,
      required: true,
    },
    Document: {
      type: String,
      required: false,
    },
    Description: {
      type: String,
      required: false,
    },
    Comment: {
      type: String,
      required: false,
    },
    Status: {
      type: Boolean,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Submission", submissionSchema);
