
import React from 'react';
import { useLocation } from 'react-router-dom';

function ProductDetail() {
  const location = useLocation();
  console.log(location);
  const product = location.state.product;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      {/* Muestra más detalles del producto aquí */}
    </div>
  );
}

export default ProductDetail;
