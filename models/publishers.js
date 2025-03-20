const mongoose = require("mongoose");

const PublisherSchema = new mongoose.Schema({
  name: String,
  email: String,
  balance: { type: Number, default: 0 },  // Publisher-এর আয়
  totalEarnings: { type: Number, default: 0 },
});

module.exports = mongoose.model("Publisher", PublisherSchema);