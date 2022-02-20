const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
    const { items, email } = req.body;

    /* This for mapind array tipe data */
    const transformedItems = items.map((item) => ({
        description: item.description,
        quantity: 1,
        price_data: {
            currency: 'idr',
            unit_amount: item.price * 1400000,
            product_data: {
                name: item.title,
                images: [item.image]
            },
        },
    }));

    /* This for create data */
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_rates: ["shr_1KV6OjCSzFXS9oE3Kmhztg5B"],
        shipping_address_collection: {
            allowed_countries: ["ID", "US", "GB", "CA"],
        },
        line_items: transformedItems,
        mode: "payment",
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata: {
            email,
            images: JSON.stringify(items.map((item) => item.image))
        },
    });

    res.status(200).json({ id: session.id });
};

// console.log(items);
// console.log(email);