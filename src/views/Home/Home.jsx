// Desk_Home_General (Home)

// Componente Navbar (con renderizado condicional)
// Trozo decorativo de fotos y texto
// Componente Catálogo
// Componente Footer
// Component Login (MODAL)

import Navbar from "../../components/Navbar/Navbar";
import Catalogue from "../../components/Catalogue/Catalogue";
import Footer from "../../components/Footer/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <Catalogue />
            <Footer />
        </>
    )
}

export default Home;