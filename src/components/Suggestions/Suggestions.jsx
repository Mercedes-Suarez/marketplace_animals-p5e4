import React, { useState, useEffect } from 'react';
import ProductHandler from "../../handler/ProductHandler"
import { Link } from 'react-router-dom';
import './suggestions.css'


function Suggestions({ selectedProduct }) {
    const [relatedProducts, setRelatedProducts] = useState([]);

 useEffect(() => {
    if (selectedProduct) {
      ProductHandler.getFilteredProducts(selectedProduct.productCategory, selectedProduct.productSubcategory)
        .then(filteredProducts => {
          // Filtrar para excluir el producto seleccionado y limitar a 4 productos
          const filteredAndLimitedProducts = filteredProducts.filter(product => product.id !== selectedProduct.id).slice(0, 4);
          setRelatedProducts(filteredAndLimitedProducts);
        });
    }
 }, [selectedProduct]);

 return (

    <div className="carousel">
    <div className="suggestions-container">
    {relatedProducts.map((product, index) => (
       <div key={index} className="suggestions-card">
         <Link to={`/products/${product.id}`} state={{ product }}>            
           <div className='suggestions-image-container'>
             <img
               src={product.productImage}
               alt={product.productName}
             />
             <div className='suggestions-overlay'>
               Ver más
             </div>
           </div>
         </Link>
         <div className="suggestions-details">
           <h3 className="suggestions-title">{product.productName}</h3>
           <p className="suggestions-description">{product.productDescription}</p>
           <div className="suggestions-price-details">
             <span className="suggestions-price">{product.productPrice.monto} {product.productPrice.moneda}</span>
             <button className="suggestions-like-button">
               <img src="/images/heart-icon.svg" alt="Me gusta" id="heart-icon" />
             </button>
           </div>
         </div>
         <div className="suggestions-add-to-cart">
           <button className="suggestions-add-to-cart-button">
             añadir al carrito
           </button>
         </div>
       </div>
     ))}
   </div>
   </div>
 );
}


export default Suggestions;