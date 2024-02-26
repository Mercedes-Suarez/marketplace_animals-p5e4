// Desk_Producto (Product)

// Componente Navbar (con renderizado condicional)
// Componente Producto
// Componente Recomendaciones
// Componente Footer

import Navbar from "../../components/Navbar/Navbar";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import Suggestions from "../../components/Suggestions/Suggestions";
import Footer from "../../components/Footer/Footer";


function Product() {
    return (
        <>
            <Navbar />
            <ProductDetail />
            <Suggestions />
            <Footer />
        </>
    )
}

export default Product;