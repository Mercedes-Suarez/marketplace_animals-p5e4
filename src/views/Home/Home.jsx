// Desk_Home_General (Home)
// Componente Navbar (con renderizado condicional)
// Trozo decorativo de fotos y texto
// Componente Catálogo
// Componente Footer
// Component Login (MODAL)

import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate("/catalogueView");
  };

  return (
    <>
      <div className="bodyhome">
        <section className="homeHeader">
          <img src="images\imageHeader.png" alt="Portada" />
          <article className="infoHeader">
          Un mundo de mimos y cuidados para tus peludos amigos:
          <br/>
          ¡Encuentra todo en nuestro marketplace para mascotas!
          </article>
        </section>
        <section className="homeServices">
          <img src="public\images\imgServices.png" alt="Servicios" />
          <article className="infoServices">
            <h2 className="title2Home">nuestra filosofía</h2>
            <p className="textbody">
              Seded do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam.
            </p>
          </article>
        </section>
        <section className="homeProducts">
          <article className="infoProducts">
            <h2 className="title2Home">nuestros productos</h2>
            <p className="textbody">
              Seded do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="buttonbox">
              <span onClick={goToProducts}>cuéntame más</span>
            </div>
          </article>
          <img src="public\images\imgProducts.png" alt="Productos" />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
