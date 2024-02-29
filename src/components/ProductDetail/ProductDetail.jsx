
import React from 'react';
import { useLocation } from 'react-router-dom';
import './productDetail.css';


// https://reactrouter.com/en/main/hooks/use-matches#breadcrumbs

function ProductDetail() {
  const location = useLocation();
  const product = location.state.product;

  return (
    <>
    <section className='product-detail'>
      <section className="product-detail-image">
        <img
          src={product.productImage}
          alt={product.productName}
        />
      </section>
      <section className="product-detail-info">
        <Breadcrumbs />
        <h2>{product.productName}</h2>
        <p>{product.productDescription}</p>
        <p>{product.productPrice.monto} {product.productPrice.moneda}</p>
      </section>
    </section>
    </>
  );
}

export default ProductDetail;
