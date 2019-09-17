const { Schema, SchemaTypes } = require("mongoose");
const timestamps = require("mongoose-timestamp");

const ScriptSchema = new Schema({
  key: { type: String, required: true, unique: true },
  ip: { type: String, required: false, unique: true, sparse: true },
  url: { type: String, required: true, unique: true },
  owner: { type: SchemaTypes.ObjectId, ref: "Team" }
});

ScriptSchema.methods.canBeAccessedBy = function(team) {
  if (!team) return false;
  if (team.admin) return true;
  return this.owner === team._id || this.owner._id === team._id;
};

ScriptSchema.plugin(timestamps);
module.exports = m => m.model("Script", ScriptSchema);
