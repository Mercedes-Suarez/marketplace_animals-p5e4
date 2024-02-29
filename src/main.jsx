import React from 'react';
import { createRoot} from 'react-dom/client';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
//import Login from './components/Login/Login.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<App />)

//ReactDOM.render(
//  <React.StrictMode>
// <Router>
 //  <Login />,
 //   <App />,
 //</Router>,

 // </React.StrictMode>,
 // document.getElementById('root'));

