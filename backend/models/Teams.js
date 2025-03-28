const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
    unique: true,
  }, // One-to-one relationship
});

module.exports = mongoose.model("Team", teamSchema);
