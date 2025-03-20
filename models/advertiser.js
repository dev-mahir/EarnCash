const mongoose = require("mongoose");

const AdvertiserSchema = new mongoose.Schema({
  name: String,
  email: String,
  balance: { type: Number, default: 0 },  // বিজ্ঞাপনদাতার ব্যালেন্স
});

module.exports = mongoose.model("Advertiser", AdvertiserSchema);