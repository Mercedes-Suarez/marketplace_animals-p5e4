import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import ProductHandler from "../../handler/ProductHandler";
import './card.css'

function Card({ selectedCategory, selectedSubcategory, product }) {
 const [products, setProducts] = useState([]);

  
 useEffect(() => {
    ProductHandler.getFilteredProducts(selectedCategory, selectedSubcategory).then(filteredProducts => {
      setProducts(filteredProducts);
    });
 }, [selectedCategory, selectedSubcategory]); 



 return (
    <div className="product-container">
      {products.map((product, index) => (
        <div key={index} className="card">
          <Link to={`/products/${product.id}`} state={{ product }}>            
            <div className='product-image-container'>
              <img
                src={product.productImage}
                alt={product.productName}
              />
              <div className="overlay">
                Ver más
              </div>
            </div>
          </Link>
              <div className="product-details">
                <h3 className="product-title">{product.productName}</h3>
                <div className="price-details">
                  <span className="price">{product.productPrice?.monto} {product.productPrice?.moneda}</span>
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