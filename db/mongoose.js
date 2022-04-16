const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

function connectToDatabase() {
  return mongoose.connect("mongodb://localhost:27017/TaskManager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);
module.exports = {
  connectToDatabase,
};
