const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WatchlistSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Watchlist", WatchlistSchema);
