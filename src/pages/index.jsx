import Cart from "./Cart";
import Checkout from "./Checkout";
import Completion from "./Completion";
import Error from "./Error";
import Features from "./Features";
import Home from "./Home";
import News from "./News";
import Products from "./Products";
import ProtectedRoute from "./ProtectedRoute";
import Services from "./Services";
import SingleProduct from "./SingleProduct";
import ReturnPolicy from "./ReturnPolicy"; // Added ReturnPolicy component
import CompletedOrder from "./CompletedOrder"; // Added CompletedOrder page
import FAQ from "./faq"; // Use the exact casing of the file name
 // Import the FAQ page

export {
  Features,
  Services,
  News,
  Completion,
  Cart,
  Checkout,
  Error,
  Home,
  Products,
  SingleProduct,
  ProtectedRoute,
  ReturnPolicy, // Exporting ReturnPolicy for easy use in App.jsx
  CompletedOrder, // Exporting CompletedOrder page
  FAQ, // Exporting FAQ page
};
