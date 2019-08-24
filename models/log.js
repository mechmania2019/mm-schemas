const { Schema, SchemaTypes } = require('mongoose')
const timestamps = require('mongoose-timestamp')

const LogSchema = new Schema({
  key: { type: String, required: true, unique: true },
  url: { type: String, required: true, unique: true },
  players: [{type: SchemaTypes.ObjectId, ref: 'Script'}], 
  index: {type: String, required: true, index: true}
})

LogSchema.methods.canBeAccessedBy = function(team) {
  if(!team) return false
  if(team.admin) return true
  return this.players.some(player => player === team._id || player._id === team._id)
}

LogSchema.plugin(timestamps)
module.exports = m => m.model('Log', LogSchema)