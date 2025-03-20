router.post("/click", async (req, res) => {
  try {
    const { adId } = req.body;
    const ad = await Ad.findById(adId);

    if (ad) {
      ad.clicks += 1;
      await ad.save();
      res.json({ message: "Click recorded" });
    } else {
      res.status(404).json({ message: "Ad not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});