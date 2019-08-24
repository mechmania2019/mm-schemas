const mongoose = require("mongoose");
const { Team } = require("..")(mongoose);

mongoose.connect(process.env.MONGO_URL);
mongoose.Promise = Promise;

const test1 = new Team({
  name: "Admin",
  email: "pranay.gp@gmail.com",
  admin: true
});
const test2 = new Team({
  name: "User",
  email: "arshiam2828@gmail.com",
  admin: false
});

test1.save().then(console.log);
test2.save().then(console.log);
