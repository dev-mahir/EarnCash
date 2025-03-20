router.get("/pending-withdrawals", async (req, res) => {
  try {
    const withdrawals = await Withdrawal.find({ status: "Pending" });
    res.json(withdrawals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});