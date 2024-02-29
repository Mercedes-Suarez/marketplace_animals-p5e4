
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './productDetail.css';


// https://reactrouter.com/en/main/hooks/use-matches#breadcrumbs

function ProductDetail() {
  const location = useLocation();
  const product = location.state.product;

  return (
    <>
    <Navbar />
    <section className='product-detail'>
      <section className="product-detail-image">
        <img
          src={product.productImage}
          alt={product.productName}
        />
      </section>
      <section className="product-detail-info">
        <h2>{product.productName}</h2>
        <p>{product.productDescription}</p>
        <p>{product.productPrice.monto} {product.productPrice.moneda}</p>
      </section>
    </section>
    <Footer />
    </>
  );
}

export default ProductDetail;
