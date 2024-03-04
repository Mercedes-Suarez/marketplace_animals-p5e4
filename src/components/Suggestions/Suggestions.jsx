import React, { useState, useEffect } from 'react';
import ProductHandler from "../../handler/ProductHandler"


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
    <div>
      <h1>También te puede interesar...</h1>
      <div className="suggestions-container">
        {relatedProducts.map((product, index) => (
          <div key={index} className="suggestion-card">
            {/* Aquí puedes usar el componente Card o una estructura similar para mostrar cada producto */}
            <h3>{product.productName}</h3>
            <img src={product.productImage} alt={product.productName} />
            <p>{product.productDescription}</p>
          </div>
        ))}
      </div>
    </div>
 );
}


export default Suggestions;