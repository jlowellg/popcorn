const mongoose = require("mongoose");

const WatchlistSchema = new mongoose.Schema({
  id: String,
  title: String,
  type: String,
});

const WatchlistModel = mongoose.model("Watchlist", WatchlistSchema);
module.exports = WatchlistModel;
