import { useLocation } from "react-router";
import { Link } from "react-router-dom";

// https://www.youtube.com/watch?v=zy8rqihtvA8
// https://reactrouter.com/en/main/hooks/use-matches#breadcrumbs

function Breadcrumbs() {
   const location = useLocation();

   let productNameForCrumb = location.state.product.productName.toLowerCase().split(' ').join('-');


   let currentPath = '';

   // descomponemos la ruta en sus segmentos individuales (en un array de subcadenas), separando por el caracter '/'
   const crumbs = location.pathname.split('/')
      // elimina cualquier segmento vacío del array resultante (puede haber segmentos vacíos al principio o al final si la ruta comienza o termina con /). Este paso asegura que sólo se procesen los segmentos que contienen texto
      .filter(crumb => crumb !== '')
      // recorre cada segmento del array (crumb) y lo concatena al valor de currentPath con un / al principio. Esto construye progresivamente la ruta completa a partir de los segmentos individuales
      .map(crumb => {
        currentPath += `/${crumb}`;
          console.log(currentPath);
          // NOTA: Esto, tras todo este rollo, NO SE ESTÁ USANDO, pues nuestra ruta no es lineal. Al final en el return hemos hecho una ruta "a mano" más propia para lo que queríamos.
      })

 return (
        <div className="breadcrumbs">
          <Link to="/">home</Link> / <Link to="/catalogueView">catálogo</Link> / {productNameForCrumb}-{location.state.product.id}
        </div>
 );
}

export default Breadcrumbs;