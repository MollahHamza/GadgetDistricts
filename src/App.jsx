// App.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import MobileCartButton from "./components/MobileCartButton"; // Import the MobileCartButton
import {
  Home,
  Cart,
  Products,
  SingleProduct,
  Checkout,
  Completion,
  CompletedOrder,
  Features,
  Services,
  News,
  ReturnPolicy,
  FAQ,
  Error,
} from "./pages"; // Import the pages

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Products />} />
        <Route path="/shop/:id" element={<SingleProduct />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/completion" element={<Completion />} />
        <Route path="/completed-order" element={<CompletedOrder />} />
        <Route path="/features" element={<Features />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<News />} />
        <Route path="/returnpolicy" element={<ReturnPolicy />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      <MobileCartButton /> {/* Add the MobileCartButton here */}
    </BrowserRouter>
  );
}

export default App;
