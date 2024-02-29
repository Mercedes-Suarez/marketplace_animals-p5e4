import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/Home/Home";
import Management from "./views/Management/Management";
import CatalogueView from "./views/CatalogueView/CatalogueView";
import Product from "./views/Product/Product";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogueView" element={<CatalogueView />} handle={{crumb : () => <span>catálogo</span>}}/>
        <Route path="/myProducts" element={<Management />} />
        <Route path="/products/:id" element={<ProductDetail />} handle={{crumb : () => <span>detalle de producto</span>}}/>
      </Routes>
    
    </Router>
  );
}

export default App;