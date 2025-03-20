const express = require("express");
const Ad = require("../models/Ad");

const router = express.Router();

router.get("/get-ad", async (req, res) => {
  try {
    const { category, country } = req.query;

    const ad = await Ad.findOne({ targetCategory: category, targetCountry: country }).sort({ impressions: 1 });

    if (!ad) {
      return res.status(404).json({ message: "No ad available" });
    }

    ad.impressions += 1;
    await ad.save();

    res.json(ad);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;