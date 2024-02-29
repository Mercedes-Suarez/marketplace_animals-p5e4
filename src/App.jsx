import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/Home/Home";
import Management from "./views/Management/Management";
import CatalogueView from "./views/CatalogueView/CatalogueView";
import ProductDetail from "./components/ProductDetail/ProductDetail";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogueView" element={<CatalogueView />} />
        <Route path="/myProducts" element={<Management />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    
    </Router>
  );
}

export default App;