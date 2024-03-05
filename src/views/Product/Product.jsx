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
      <ProductDetail />
      <hr style={{
        border: "none",
        borderTop: "1px solid #5C4B51", // Color de la raya
        width: "1030px", // Anchura de la raya
        marginTop: "100px", // Margen superior
        marginBottom: "80px" // Margen inferior
      }} />
      <Suggestions selectedProduct={selectedProduct} />
      <Footer />
    </>
 );
}

export default Product;