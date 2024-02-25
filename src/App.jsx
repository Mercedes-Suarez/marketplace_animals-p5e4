import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/Home/Home";
import Management from "./views/Management/Management";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myProducts" element={<Management />} />
      </Routes>
    </Router>
  );
}

export default App;