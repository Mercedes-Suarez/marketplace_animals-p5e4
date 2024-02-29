import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Management from "./views/Management/Management";
import CatalogueView from "./views/CatalogueView/CatalogueView";
import Login from "./components/Login/Login"; 

function App() {
  return (
    <Router>
        <Routes>
         
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login /> } />
            <Route path="/catalogueView" element={<CatalogueView />} />
            <Route path="/myProducts" element={<Management />} /> 
       
        </Routes>  
    </Router>
  );
}
//ReactDOM.render(<App />, document.getElementById('root'));
export default App;
