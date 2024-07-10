const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { email, firstName, lastName } = req.body;

  try {
    const account = await stripe.accounts.create({
      type: 'express',
      email: email,
    });

    res.status(200).json({ accountId: account.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
