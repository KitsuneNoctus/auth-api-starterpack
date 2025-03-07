// TODO: Set up your Mongoose connection here.
/* Mongoose Connection */
const mongoose = require("mongoose");
assert = require("assert");

const url = "mongodb+srv://bew13user:bew13password@cluster0.fjtvw.mongodb.net/BEW1-3?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false, },
  function(err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to database");

    // db.close(); turn on for testing
  }
);
mongoose.connection.on("error", console.error.bind(console, "MongoDB connection Error:"));
mongoose.set("debug", true);

module.exports = mongoose.connection;