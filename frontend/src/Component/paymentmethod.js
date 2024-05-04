import React, { useState } from "react";
import axios from "axios";

function Paymentmethod() {
    const stripe = require('stripe');
const express = require('express');
const { collection, doc, setDoc } = require('firebase/firestore');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

const stripeGateway = stripe(process.env.STRIPE_KEY);
const DOMAIN = process.env.DOMAIN;

app.post('/stripe-checkout', async (req, res) => {
    try {
        const session = await stripeGateway.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            success_url: `${DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${DOMAIN}/checkout?payment_fail=true`,
            line_items: req.body.items.map(item => ({
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: item.name,
                        description: item.shortDesc,
                        images: [item.image]
                    },
                    unit_amount: item.price * 100
                },
                quantity: item.quantity 
            }))
        });

        res.json({ url: session.url });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating session.' });
    }
});

app.get('/success', async (req, res) => {
    try {
        const { order, session_id } = req.query;
        const decodedOrder = decodeURIComponent(order);
        
        const session = await stripeGateway.checkout.sessions.retrieve(session_id);
        const customerEmail = session.customer_email;

        const date = new Date();
        const ordersCollection = collection(db, "orders");
        const docName = `${customerEmail}-order-${date.getTime()}`;

        await setDoc(doc(ordersCollection, docName), JSON.parse(decodedOrder));
        res.redirect('/checkout?payment=done');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing payment success.' });
    }
});

// Add more routes and middleware as needed...

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

    
}
   
export default Paymentmethod;
