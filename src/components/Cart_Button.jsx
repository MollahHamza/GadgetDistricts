import { BsCart2 } from "react-icons/bs"
import { Link } from "react-router-dom"
import { useCartContext } from "../context/cart/cart_context"

const Cart_Button = () => {
  const { total_items } = useCartContext()

  const handleContact = () => {
    // WhatsApp number you provided
    const whatsappNumber = "+8801836318259";
    const message = `Hello, I would like to inquire about my cart.`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  }

  return (
    <div className="flex space-x-8 md:space-x-8">
      {/* Cart Button */}
      <Link
        title="Cart"
        to="/cart"
        className="relative flex flex-row items-center justify-center"
      >
        <BsCart2 className="relative ml-1 h-6 w-6" />
        <span className="absolute -top-2 -right-4 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs text-white shadow-md">
          {total_items}
        </span>
      </Link>

      {/* WhatsApp Contact Button */}
      <button
        title="Contact us on WhatsApp"
        onClick={handleContact}
        className="bg-green-500 text-white px-4 py-2 rounded-md"
      >
        Contact us
      </button>
    </div>
  )
}

export default Cart_Button
