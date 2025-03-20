const express = require("express");
const multer = require("multer");
const Ad = require("../models/Ad");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("video"), async (req, res) => {
  try {
    const newAd = new Ad({
      advertiserId: req.body.advertiserId,
      videoUrl: `/uploads/${req.file.filename}`,
      targetCategory: req.body.category,
      targetCountry: req.body.country,
    });

    await newAd.save();
    res.status(201).json({ message: "Ad uploaded successfully", ad: newAd });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;