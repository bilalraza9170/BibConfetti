const mongoose = require("mongoose");
const { Schema } = mongoose;

const cfpSchema = new Schema(
  {
    Oid: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    conferenceName: {
      type: String,
      required: true,
    },
    acronym: {
      type: String,
      required: true,
    },
    webpage: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    abstractDeadline: {
      type: Date,
      required: true,
    },
    submissionDeadline: {
      type: Date,
      required: true,
    },
    primaryArea: {
      type: String,
      required: true,
    },
    secondaryArea: {
      type: String,
      required: true,
    },
    other: {
      type: String,
      required: false,
    },
    topics: {
      type: String,
      required: true,
    },
    ECname: {
      type: String,
      required: true,
    },
    ECemail: {
      type: String,
      required: true,
    },
    CFPjoiningcode: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CFP", cfpSchema);
