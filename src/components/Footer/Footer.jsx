import "./footer.css";

function Footer() {
  return (
    <>
    
    <section className="footerbrown">
      <section className="linksfooter">
        <div className="pagesfooter">
          <p>páginas</p>
          <br/>
          <p>home</p>
          <p>catálogo</p>
        </div>
        <div className="accessfooter">
          <p>accesos</p>
          <br/>
          <p>login</p>
          <p>registro</p>
        </div>
      </section>
        <img src="images\logoclaro.svg" alt="logo" />
        <div className="legal">
          <p>politica de privacidad</p>
          <p>aviso legal</p>
        </div>
    </section>
      <section className="footerred">
        <h4>desarrollado por Grupo 20 Creations</h4>
        </section>
    </>
  );
}

export default Footer;
