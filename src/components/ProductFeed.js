import Product from "./Product";

function ProductFeed({ products }) {
    return (

        /* Grid flow row dense is to made all not be empty */
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
        {/* This for first slice */}
            {products
                .slice(0, 4)
                .map(({id, title, price, description, category, image}) => (
                <Product 
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                />
            ))}
            
            {/* This for banner in the middlw */}
            <img 
                className="md:col-span-full"
                src="https://links.papareact.com/dyz"
                alt="banner middle" 
            />
            
            {/* This for seacond slice */}
            <div className="md:col-span-2">
                {products
                    .slice(4, 5)
                    .map(({ id, title, price, description, category, image}) =>(
                        <Product 
                            key={id}
                            id={id}
                            title={title}
                            price={price}
                            description={description}
                            category={category}
                            image={image}
                        />    
                    ))}
            </div>
                    
            {/* This is the last slice */}
            {products
                .slice(5, products.length)
                .map(({ id, title, price, description, category, image}) =>(
                    <Product 
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                    />          
                ))}


        </div>
    );
}

export default ProductFeed;