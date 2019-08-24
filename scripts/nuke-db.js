const mongoose = require("mongoose");
const { Team, Script, Log, Match } = require("..")(mongoose);

mongoose.connect(process.env.MONGO_URL);
mongoose.Promise = Promise;

Team.deleteMany().then(({n}) => console.log(`Deleted ${n} teams`))
Script.deleteMany().then(({n}) => console.log(`Deleted ${n} scripts`))
Log.deleteMany().then(({n}) => console.log(`Deleted ${n} logs`))
Match.deleteMany().then(({n}) => console.log(`Deleted ${n} matches`))