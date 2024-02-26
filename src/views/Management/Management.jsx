// Desk_Panel_Gestión (Management)

// Componente Navbar (logueado)
// Componente Formulario
// Componente MisProductos
// Componente Footer

import Navbar from "../../components/Navbar/Navbar";
import Form from "../../components/Form/Form";
import MyProducts from "../../components/MyProducts/MyProducts";
import Footer from "../../components/Footer/Footer";

function Management() {
    return (
        <>
            <Navbar />
            <Form />
            <MyProducts />
            <Footer />
        </>
    );
}

export default Management;