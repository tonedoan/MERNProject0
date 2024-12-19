import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { ReactLogo } from './pages/ReactLogo';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout serves as a wrapper component */}
        <Route path="/" element={<Layout />}>
          {/* Nested Routes */}
          {/* Lowercase after path for the url*/}
          <Route path="home" element={<Home />} />  
          <Route path="contact" element={<Contact />} />
          <Route path="reactlogo" element={<ReactLogo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
