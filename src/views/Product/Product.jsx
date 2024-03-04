// Desk_Producto (Product)

// Componente Navbar (con renderizado condicional)
// Componente Producto
// Componente Recomendaciones
// Componente Footer

import React from 'react';
import { useLocation } from 'react-router-dom';
import Suggestions from "../../components/Suggestions/Suggestions";
import Navbar from "../../components/Navbar/Navbar";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import Footer from "../../components/Footer/Footer";


function Product() {
 const location = useLocation();
 const selectedProduct = location.state?.product;

 return (
    <>
      <Navbar />
      <ProductDetail />
      <Suggestions selectedProduct={selectedProduct} />
      <Footer />
    </>
 );
}

export default Product;