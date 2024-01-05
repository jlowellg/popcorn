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
    enum: ["Movie", "TV Series"],
    required: true,
  },
  dateReleased: {
    type: Date,
  },
  posterPath: {
    type: String,
  },
  dateAdded: {
    type: Date,
  },
  status: {
    type: String,
    enum: ["Completed", "In Progress", "To Watch"],
    default: "To Watch",
  },
  currentEpisode: {
    type: Number,
    default: null,
  },
  dateFinished: {
    type: Date,
    default: null,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  myRating: {
    type: Number,
    min: 0,
    max: 10,
    default: null,
  },
});

module.exports = mongoose.model("Watchlist", WatchlistSchema);
