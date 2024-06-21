const mongoose = require("mongoose");
const { Schema } = mongoose;

const coSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: false,
    },
    Oname: {
      type: String,
      require: true,
    },
    Odetail: {
      type: String,
      require: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Conference_Organizer", coSchema);
