import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import Management from "./views/Management/Management";
import CatalogueView from "./views/CatalogueView/CatalogueView";
import Product from "./views/Product/Product";
import SearchView from "./views/SearchView/SearchView";

function App() {
  return (

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/catalogueView"
            element={<CatalogueView />}
            handle={{ crumb: () => <span>catálogo</span> }}
          />
          <Route path="/myProducts" element={<Management />} />
          <Route
            path="/products/:id"
            element={<Product />}
            handle={{ crumb: () => <span>detalle de producto</span> }}
          />
          <Route path="/searchview" element={<SearchView />} />
        </Routes>
      </Router>

  );
}

export default App;
