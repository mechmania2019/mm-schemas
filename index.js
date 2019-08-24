const Team = require('./models/team')
const Script = require('./models/script')
const Log = require('./models/log')
const Match = require('./models/match')

module.exports = mongoose => ({
  Team: Team(mongoose),
  Script: Script(mongoose),
  Log: Log(mongoose),
  Match: Match(mongoose),
})