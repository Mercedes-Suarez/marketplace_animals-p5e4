// https://www.youtube.com/watch?v=B9tDYAZZxcE
// me quedé por minuto 13
import React, { useState, useEffect } from 'react';
import ProductHandler from "../../handler/ProductHandler";

function Catalogue() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductHandler.getProducts().then(products => {
            setProducts(products);
        });
    }, []); // Pasar un array vacío como segundo argumento para que el efecto solo se ejecute una vez al montar el componente

    return (
    <div className="catalogue">
            {products.map(product => (
                <div key={product.id}>
                    <h1>{product.productName}</h1>
                    <img src={product.productImage} alt={product.productName} />
                    <p>{product.productDescription}</p>
                </div>
            ))}
        </div>
    );
}

export default Catalogue;
