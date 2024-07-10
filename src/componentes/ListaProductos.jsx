import React from 'react';

const ProductList = ({ products, onAddToCart }) => {
    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Precio: ${product.price}</p>
                    <button onClick={() => onAddToCart(product)}>Añadir al Carrito</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
