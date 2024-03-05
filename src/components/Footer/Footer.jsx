import { NavLink } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <>
      <section className="footerbrown">
        <section className="linksfooter">
          <div className="pagesfooter">
            <p className="titlefooter">páginas</p>
            <br />
            <p><NavLink className="myNavLinkFooter" to="/">home</NavLink></p>
            <NavLink className="myNavLinkFooter" to="/catalogueView">catálogo</NavLink>
          </div>
          <div className="accessfooter">
            <p className="titlefooter">accesos</p>
            <br />
            <p>login</p>
            <p>registro</p>
          </div>
        </section>
        <img src="\public\images\logoclaro.svg" alt="logo" />
        <div className="legal">
          <p>politica de privacidad</p>
          <p>aviso legal</p>
        </div>
      </section>
      <section className="footerred">
        <h4>desarrollado por Grupo 4 Creations</h4>
      </section>
    </>
  );
}

export default Footer;
