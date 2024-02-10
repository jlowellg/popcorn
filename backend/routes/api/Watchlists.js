const express = require("express");
const router = express.Router();

const Watchlist = require("../../models/Watchlist");

const verifyToken = require("../../middleware/verifyToken");
//const verifyToken = require("../api/Users");

router.post("/add", async (req, res) => {
  try {
    const existingWatchlist = await Watchlist.findOne({
      user: req.body.user,
      id: req.body.id,
    });

    if (existingWatchlist) {
      return res
        .status(400)
        .json({ error: "Watchlist with the same id already exists" });
    }

    const watchlist = new Watchlist({
      user: req.body.user,
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

router.get("/get/:user", async (req, res) => {
  try {
    if (req.username !== req.params.user) {
      console.log(req.username);
      return res.status(403).json({ message: "Forbidden: Access denied" });
    }
    const watchlist = await Watchlist.find({ user: req.params.user });
    res.status(200).json(watchlist);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/check/:user/:itemId", async (req, res) => {
  try {
    const item = await Watchlist.findOne({
      user: req.params.user,
      id: req.params.itemId,
    });
    res.json({ exists: !!item });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/unsave/:user/:itemId", async (req, res) => {
  try {
    const item = await Watchlist.deleteOne({
      user: req.params.user,
      id: req.params.itemId,
    });
    res.status(200).json({ message: "Unsave successful." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/favorite/:user/:itemId", async (req, res) => {
  try {
    const item = await Watchlist.findOneAndUpdate(
      { user: req.params.user, id: req.params.itemId },
      { favorite: true }
    );
    res.status(200).json({ message: item.title });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/unfavorite/:user/:itemId", async (req, res) => {
  try {
    const item = await Watchlist.findOneAndUpdate(
      { user: req.params.user, id: req.params.itemId },
      { favorite: false }
    );
    res.status(200).json({ message: item.title });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/edit/:user/:itemId", async (req, res) => {
  if (req.body.myRating) {
    if (req.body.myRating < 1 || req.body.myRating > 10) {
      return res.status(401).json({ message: "Rating must be 1 to 10." });
    }
  }

  if (req.body.currentEp) {
    if (req.body.currentEp < 1) {
      return res.status(401).json({ message: "Episode must be positive." });
    }
  }

  try {
    const item = await Watchlist.findOneAndUpdate(
      { user: req.params.user, id: req.params.itemId },
      {
        status: req.body.status,
        currentEpisode: req.body.currentEp,
        myRating: req.body.myRating,

        dateFinished: req.body.dateFinished,
      }
    );
    res.status(200).json({ message: `${item.title} successfully edited.` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
