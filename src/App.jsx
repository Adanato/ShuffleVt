import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
// Main Pages
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Learn from "./pages/learn/Learn.jsx";

// Common component
import Header from "./shared/header/Header.jsx";
import Footer from "./shared/footer/Footer.jsx";
import NotFound from "./shared/notfound/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
