import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
// Main Pages
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Capybara from "./pages/CapybaraPage";
import Auth from "./pages/AuthPage";

// Sub Pages
import Post from "./pages/PostPage";

// Common component
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import NotFound from "./shared/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capybara" element={<Capybara />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
