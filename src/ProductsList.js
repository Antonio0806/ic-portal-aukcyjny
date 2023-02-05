import React from 'react';
import ProductComponent from './ProductComponent';

const ProductsList = ({ products }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {products.map((product) => (
                <ProductComponent
                    key={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                />
            ))}
        </div>
    );
};

export default ProductsList;
