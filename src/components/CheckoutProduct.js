import Image from 'next/image';
import { CurrencyEuroIcon, StarIcon } from '@heroicons/react/solid';
import Currency from "react-currency-formatter";
 
function CheckoutProduct({
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime,
}) {
    const priceIDR = price * 14000;

    return (
        <div className="grid grid-cols-5">
            <Image 
                src={image}
                height={200}
                width={200}
                objectFit="contain"
            />

            {/* Middle */}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div>
                    {Array(rating).fill().map((_,i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    ))}
                </div>

                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <Currency quantity={priceIDR} currency="IDR" />
                
                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img 
                            loading='lazy'
                            className="w-12"
                            src="https://links.papareact.com/fdw"
                            alt=""
                        />
                        <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                    </div>
                )}
            </div>
        </div>
    ) 
}

export default CheckoutProduct;