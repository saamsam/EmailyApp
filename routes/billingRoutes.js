const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../Middlewares/requireLogin.js');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    });

    req.user.credits += 5; //adding credits to current user that just made Payments.
const user =  await req.user.save(); //saving the user latest info back to db for update on the client.

res.send(user);//sending the info to the browser.
  });
};
