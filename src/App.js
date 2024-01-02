// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// route
import { BrowserRouter, Routes, Route } from "react-router-dom";

// main pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import Error404 from "./pages/Error404";
import Single from "./pages/Single";

// category pages
import Categories from "./pages/Categories";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

// register Swiper custom elements
register();

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/*" element={<Error404 />} />
          <Route path="/single/:id" element={<Single />} />
          <Route path="/categories/:category" element={<Categories />} />
          <Route path="/categories/:category/:sub" element={<Categories />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
