// Desk_Producto (Product)

// Componente Navbar (con renderizado condicional)
// Componente Producto
// Componente Recomendaciones
// Componente Footer

import Navbar from "../../components/Navbar/Navbar";
import Product from "../../components/Product/Product";
import Recommendations from "../../components/Recommendations/Recommendations";
import Footer from "../../components/Footer/Footer";


function Product() {
    return (
        <>
            <Navbar />
            <Product />
            <Recommendations />
            <Footer />
        </>
    )
}

export default Product;