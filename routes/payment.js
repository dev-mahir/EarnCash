const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

router.post("/pay", async (req, res) => {
  try {
    const { amount, currency, advertiserId } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,  // Stripe requires amount in cents
      currency: currency || "usd",
      metadata: { advertiserId },
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;