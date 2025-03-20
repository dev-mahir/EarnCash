const Publisher = require("../models/Publisher");

router.post("/track-click", async (req, res) => {
  try {
    const { adId, publisherId, clickRevenue } = req.body;
    const publisher = await Publisher.findById(publisherId);

    if (publisher) {
      publisher.balance += clickRevenue; // প্রতি ক্লিকের জন্য টাকা যোগ হবে
      publisher.totalEarnings += clickRevenue;
      await publisher.save();
      res.json({ message: "Revenue updated", balance: publisher.balance });
    } else {
      res.status(404).json({ message: "Publisher not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});