const router = require("express").Router();
const {
  verifyAndAuth,
  verifyAndAdmin,
} = require("../middleware/authMiddleware");
const { cryptoJS } = require("crypto-js");
const Favorite = require("../models/FavoriteModel");

// CREATE
router.post("/", verifyAndAuth, async (req, res) => {
  const newFavorite = new Favorite(req.body);

  try {
    const savedFavorite = await newFavorite.save();
    res.status(200).json(savedFavorite);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE
router.put("/:id", verifyAndAuth, async (req, res) => {
  try {
    const updatedFavorite = await Favorite.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedFavorite);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE
router.delete("/:id", verifyAndAuth, async (req, res) => {
  try {
    await Favorite.findByIdAndDelete(req.params.id);
    res.status(200).json("Favorites has been deleted.");
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET USER Favorites
router.get("/find/:userId", verifyAndAuth, async (req, res) => {
  try {
    const cart = await Favorite.findOne({userId: req.params.userId})
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET ALL Favorites

router.get('/', verifyAndAdmin, async (req, res) => {
    try {
        const carts = await Favorite.find()
        res.status(200).json(carts)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;
