import Header from "./components/Header.tsx";
import Cart from "./components/Cart.tsx";
import Home from "./pages/Home.tsx";
import Men from "./pages/Men.tsx";
import Women from "./pages/Women.tsx";
import Jewelry from "./pages/Jewelry.tsx";
import Electronic from "./pages/Electronic.tsx";
import Help from "./pages/Help.tsx";
import Contact from "./pages/Contact.tsx";
import Footer from "./components/Footer.tsx";
import "./styles/card.css";
import "./styles/navHighlight.css";
import "./styles/searchbar.css";
import "./styles/purchase.css";
import "./styles/cart.css";
import "./modern-normalize.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SearchProvider } from "./context/SearchContext.tsx";
import { PurchaseCountProvider } from "./context/PurchaseCountContext.tsx";
import { CartProvider } from "./context/CartContext.tsx";
import { TotalAmountProvider } from "./context/TotalAmountContext.tsx";
import { WarningProvider } from "./context/WarningContext.tsx";
import { CachedProductsProvider } from "./context/CachedProductsContext.tsx";

function App() {
  return (
    <Router>
      <WarningProvider>
        <SearchProvider>
          <PurchaseCountProvider>
            <TotalAmountProvider>
              <CartProvider>
                <CachedProductsProvider>
                  <Header />
                  <Cart />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/men" element={<Men />} />
                    <Route path="/women" element={<Women />} />
                    <Route path="/jewelry" element={<Jewelry />} />
                    <Route path="/electronic" element={<Electronic />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                  <Footer />
                </CachedProductsProvider>
              </CartProvider>
            </TotalAmountProvider>
          </PurchaseCountProvider>
        </SearchProvider>
      </WarningProvider>
    </Router>
  );
}

export default App;
