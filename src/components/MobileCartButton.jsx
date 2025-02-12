// MobileCartButton.jsx
import React from "react";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { useCartContext } from "../context/cart/cart_context";

const MobileCartButton = () => {
  const { total_items } = useCartContext();

  return (
    <div className="fixed bottom-4 right-4 md:hidden flex items-center justify-center bg-orange-500 rounded-full p-3 shadow-lg z-20">
      {/* Cart icon */}
      <Link to="/cart" title="Go to Cart">
        <BsCart2 className="h-6 w-6 text-white" />
        {/* Show total items in cart */}
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs text-orange-500">
          {total_items}
        </span>
      </Link>
    </div>
  );
};

export default MobileCartButton;
