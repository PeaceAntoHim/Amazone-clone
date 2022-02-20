import axios from 'axios';
import Image from 'next/image';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import { useSession } from "next-auth/client";
import { loadStripe } from '@stripe/stripe-js';
import Currency from 'react-currency-formatter';
import CheckoutProduct from '../components/CheckoutProduct';
import { selectItems, selectTotal } from '../slices/basketSlice';

const stripePromise =loadStripe(process.env.stripe_public_key);

function Checkout() {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const [session] = useSession();

    const createCheckOutSession = async () => {
        const stripe = await stripePromise;

        // Call the backend to create a checkout session..
        const checkoutSession = await axios.post('/api/create-checkout-session',{
            items: items,
            email: session.user.email,
        });

        // Redirect user/customer to stripe checkout
        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id
        });

        if (result.error) alert(result.error.message);
    };

    return (
        <div className="bg-gray-100">
            <Header />

            <main className="lg:flex max-w-screen-xl mx-auto">
            {/* Left */}
                <div className="flex-grow m-5 shadow-sm">
                    <Image 
                        width={1020}
                        height={250}
                        src="https://links.papareact.com/ikj"
                        objectFit="contain"
                    />

                    <div className="flex flex-col p-5 space-y-10 bg-white">
                        <h1 className="text-3xl border-b pb-4">
                            {items.length === 0 
                                ? 'Your Basket is empty.'
                                : "Shopping Basket"}
                        </h1> 
                        
                            {items.map((item, i) => (
                                <CheckoutProduct 
                                    key={i}
                                    id={item.id}
                                    title={item.title}
                                    rating={item.rating}
                                    price={item.price}
                                    description={item.description}
                                    category={item.category}
                                    image={item.image}
                                    hasPrime={item.hasPrime}
                                />
                            ))}

                    </div>  
                </div>            
            
            {/* Right */}
                <div className="flex flex-col bg-white p-10 shadow-md">
                    {items.length > 0 && (
                        <>
                            <h2 className="whitespace-nowrap">
                                Subtotal ({items.length} items):{" "}
                                <span className="font-bold">
                                    <Currency quantity={total} currency="IDR" />
                                </span>
                            </h2>

                            <button
                                role="link"
                                onClick={createCheckOutSession}
                                disabled={!session} 
                                className={`button mt-2 ${
                                !session && 
                                "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"}`}
                            >
                                {!session ? "Sign to checkout" : "Proceed to checkout"} 
                            </button>
                        </>
                    )}
                </div>
            </main>
        </div>
    );
}

export default Checkout;