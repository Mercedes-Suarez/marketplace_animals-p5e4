import React, { useState, useEffect } from 'react';
import ProductHandler from "../../handler/ProductHandler";
import './card.css'

function Card() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        ProductHandler.getProducts().then(products => {
            setProducts(products);
        });
    }, []);
    return (
        <div className="product-container">
          {products.map((product, index) => (
            <div key={index} className="card">
                <a href="#">                    
                    <div className='image-container'>
                        <img
                        src={product.productImage}
                        alt={product.productName}
                        />
                        <div class="overlay">
                            Ver más
                        </div> 
                    </div>
                </a>
              <div className="product-details">
                <h3 className="product-title">{product.productName}</h3>
            <p className="product-description">{product.productDescription}</p>
                <div className="price-details">
                  <span className="price">{product.productPrice.monto} {product.productPrice.moneda}</span>
                  <button className="like-button">
                    <img src="/images/heart-icon.svg" alt="Me gusta" id="heart-icon" />
                  </button>
                </div>
              </div>
              <div className="add-to-cart">
                <button className="add-to-cart-button">
                  añadir al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      );
}
export default Card;