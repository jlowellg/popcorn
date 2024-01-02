const express = require("express");
const router = express.Router();

const Watchlist = require("../../models/Watchlist");

router.post("/add", async (req, res) => {
  try {
    const watchlist = new Watchlist({
      id: req.body.id,
      title: req.body.title,
      type: req.body.type,
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

module.exports = router;
