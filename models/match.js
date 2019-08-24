const { Schema, SchemaTypes } = require('mongoose')

const MatchSchema = new Schema({
  key: { type: String, required: true, unique: true },
  winner: { type: Number },
  length: { type: Number }
})

module.exports = m => m.model('Match', MatchSchema)