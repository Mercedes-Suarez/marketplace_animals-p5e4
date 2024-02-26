import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import './index.css'
import Catalogue from './components/Catalogue/Catalogue.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Catalogue/>

  </React.StrictMode>,
  
)
