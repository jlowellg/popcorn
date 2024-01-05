const express = require("express");
const router = express.Router();

const Watchlist = require("../../models/Watchlist");

router.post("/add", async (req, res) => {
  try {
    const existingWatchlist = await Watchlist.findOne({ id: req.body.id });

    if (existingWatchlist) {
      return res
        .status(400)
        .json({ error: "Watchlist with the same id already exists" });
    }

    const watchlist = new Watchlist({
      id: req.body.id,
      title: req.body.title,
      type: req.body.type,
      dateReleased: req.body.dateReleased,
      posterPath: req.body.posterPath,
      dateAdded: req.body.dateAdded,
    });

    const newWatchlist = await watchlist.save();
    res.status(201).json(newWatchlist);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.get("/get", async (req, res) => {
  try {
    const watchlist = await Watchlist.find();
    res.status(200).json(watchlist);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/check/:itemId", async (req, res) => {
  try {
    const item = await Watchlist.findOne({ id: req.params.itemId });
    res.json({ exists: !!item });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/unsave/:itemId", async (req, res) => {
  try {
    const item = await Watchlist.deleteOne({ id: req.params.itemId });
    res.status(200).json({ message: "Unsave successful." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/favorite/:itemId", async (req, res) => {
  try {
    const item = await Watchlist.findOneAndUpdate(
      { id: req.params.itemId },
      { favorite: true }
    );
    res.status(200).json({ message: "Favorite successful." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/unfavorite/:itemId", async (req, res) => {
  try {
    const item = await Watchlist.findOneAndUpdate(
      { id: req.params.itemId },
      { favorite: false }
    );
    res.status(200).json({ message: "Unfavorite successful." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
