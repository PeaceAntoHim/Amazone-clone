const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
    const { items, email } = req.body;

    /* This for mapind array tipe data */
    const transformedItems = items.map((item) => ({
        description: item.description,
        quantity: 1,
        price_data: {
            currency: 'idr',
            unit_amount: item.price * 14000,
            product_data: {
                name: item.title,
                images: [item.image]
            },
        }
    }));

    /* This for create data */
    const session = await stripe.checkout.session.create({
        payment_method_types: ["card"],
        shapping_rates: ["shr_1KUx7DCSzFXS9oE3Yhr52fSo"],
        shipping_addreass_collection: {
            allowed_countries: ["ID", "US", "GB", "CA"],
        },
        line_items: transformedItems,
        mode: "payment",
        success_url: `${process.env.HOST}/success`,
        cancle_url: `${process.env.HOST}/checkout`,
        metadata: {
            email,
            images: JSON.stringify(items.map(item => item.image))
        }
    });

    res.status(200).json({ id: session.id });
};

// console.log(items);
// console.log(email);