const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

function connectToDatabase() {
  return mongoose.connect(
    "mongodb+srv://jorge:jorge1989@cluster0.yv5la.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
}

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);
module.exports = {
  connectToDatabase,
};
