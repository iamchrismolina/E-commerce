import Header from "./components/Header.tsx";
import Home from "./pages/Home.tsx";
import Men from "./pages/Men.tsx";
import Women from "./pages/Women.tsx";
import Jewelry from "./pages/Jewelry.tsx";
import Electronic from "./pages/Electronic.tsx";
import Footer from "./components/Footer.tsx";
import "./modern-normalize.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/jewelry" element={<Jewelry />} />
        <Route path="/electronic" element={<Electronic />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
