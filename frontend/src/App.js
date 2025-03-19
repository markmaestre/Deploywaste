import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./Components/Home";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import About from "./Components/about";
import Policy from "./Components/PrivacyPolicy";
import Terms from "./Components/Terms";
import CookieSettings from "./Components/CookieSettings";
import Login from './Components/login';
import Register from './Components/Register';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<CookieSettings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
       
      </Routes>
    </Router>
  );
}

export default App;