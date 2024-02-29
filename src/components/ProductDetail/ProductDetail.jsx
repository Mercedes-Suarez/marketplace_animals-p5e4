
import React from 'react';
import { useLocation } from 'react-router-dom';

import Breadcrumbs from '../ProductDetail/Breadcrumbs.jsx';

import './productDetail.css';
import '../../index.css';

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
        <p>{product.productPrice.monto} {product.productPrice.moneda}</p>
        <hr></hr>
        <p>{product.productDescription}</p>
        <section className="buttons">
          <button className="add-to-cart-btn">añadir al carrito</button>
          <button className='stock-btn'>{product.productStock} uds en stock</button>
        </section>
      </section>
    </section>
    </>
  );
}

export default ProductDetail;
