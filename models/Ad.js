const mongoose = require("mongoose");

const AdSchema = new mongoose.Schema({
  advertiserId: { type: mongoose.Schema.Types.ObjectId, ref: "Advertiser" },
  videoUrl: String,  // ভিডিও বিজ্ঞাপনের লিংক
  imageUrl: String,  // ব্যানার বিজ্ঞাপনের লিংক
  targetCategory: String, // ক্যাটাগরি অনুযায়ী বিজ্ঞাপন দেখানো
  targetCountry: String,  // নির্দিষ্ট দেশে বিজ্ঞাপন দেখানো
  impressions: { type: Number, default: 0 },
  clicks: { type: Number, default: 0 },
});

module.exports = mongoose.model("Ad", AdSchema);