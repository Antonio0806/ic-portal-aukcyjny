import React from 'react';
import ProductComponent from './ProductComponent';

const ProductsList = ({ products }) => {
    return (
        <div style={{     display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2px', }}>
            {products.map((product) => (
                <ProductComponent
                    key={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    author={product.author}
                    author_description={product.author_description}
                />

            ))}
        </div>
    );
};

export default ProductsList;
