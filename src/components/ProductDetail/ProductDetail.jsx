
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function ProductDetail() {
  const location = useLocation();
  const product = location.state.product;

  return (
    <>
    <Navbar />
    <section className='product-detail'>
      <h2>{product.productName}</h2>
      <img
        src={product.productImage}
        alt={product.productName}
      />
      <p>{product.productDescription}</p>
      <p>{product.productPrice.monto} {product.productPrice.moneda}</p>
    </section>
    <Footer />
    </>
  );
}

export default ProductDetail;
