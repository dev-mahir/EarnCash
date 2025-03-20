router.post("/withdraw", async (req, res) => {
  try {
    const { publisherId, amount, paymentMethod, accountDetails } = req.body;
    const publisher = await Publisher.findById(publisherId);

    if (publisher.balance < amount) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    publisher.balance -= amount;
    await publisher.save();

    // এখানে পেমেন্ট প্রসেস করতে হবে (bKash API, PayPal API ইন্টিগ্রেট করতে হবে)

    res.json({ message: "Withdrawal request submitted", remainingBalance: publisher.balance });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});