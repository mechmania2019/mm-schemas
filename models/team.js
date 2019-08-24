const { Schema, SchemaTypes } = require("mongoose");
const { isEmail } = require("validator");
const cuid = require("cuid");

const TeamSchema = new Schema({
  name: { type: String, required: true, unique: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [isEmail, "Invalid Email"]
  },
  latestScript: { type: SchemaTypes.ObjectId, ref: "Script" },
  admin: { type: Boolean, default: false },
  token: {
    type: String,
    default: cuid,
    index: true,
    unique: true,
    required: true
  }
});

TeamSchema.methods.canBeAccessedBy = function(team) {
  if (!team) return false;
  return team.admin || this._id === team._id;
};

module.exports = m => m.model("Team", TeamSchema);
