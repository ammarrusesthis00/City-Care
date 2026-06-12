import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Home";
import ServicesPage from "./Services/index";
import AboutPage from "./About";
import ContactPage from "./Contact";
import ServiceAreasPage from "./ServiceAreas";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service-areas" element={<ServiceAreasPage />} />
      </Routes>
    </BrowserRouter>
  )
}