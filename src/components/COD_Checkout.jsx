import React, { useState } from "react";
import axios from "axios";
import { useCartContext } from "../context/cart/cart_context";
import { useNavigate } from "react-router-dom";

const districts = [
  "Dhaka", "Chattogram", "Khulna", "Rajshahi", "Sylhet", "Barishal", "Rangpur", "Mymensingh",
  "Cumilla", "Gazipur", "Narail", "Jessore", "Tangail", "Faridpur", "Narayanganj", "Bogra",
  "Feni", "Lakshmipur", "Patuakhali", "Noakhali", "Satkhira", "Pirojpur", "Pabna",
  "Jamalpur", "Sherpur", "Kishoreganj", "Habiganj", "Sunamganj", "Moulvibazar",
  "Kushtia", "Meherpur", "Chuadanga", "Jhenaidah", "Magura", "Rajbari", "Gopalganj",
  "Shariatpur", "Manikganj", "Munshiganj", "Narsingdi", "Madaripur", "Chandpur",
  "Cox's Bazar", "Bandarban", "Khagrachhari", "Rangamati", "Brahmanbaria", "Panchagarh",
  "Thakurgaon", "Dinajpur", "Nilphamari", "Lalmonirhat", "Kurigram", "Gaibandha",
  "Nawabganj", "Joypurhat", "Naogaon", "Sirajganj", "Natore",
];

const COD_Checkout = () => {
  const navigate = useNavigate();
  const { cart, total_amount, clearCart } = useCartContext();
  const [formData, setFormData] = useState({
    name: "",
    district: "",
    address: "",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [deliveryFee, setDeliveryFee] = useState(0);

  const isValidPhoneNumber = (phone) => /^[0-9]{11}$/.test(phone);
  const isValidEmail = (email) => email === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "district") {
      setDeliveryFee(value === "Dhaka" ? 60 : value ? 120 : 0);
    }
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError("Please enter your name");
      return;
    }
    if (!formData.district.trim()) {
      setError("Please select your district");
      return;
    }
    if (!formData.address.trim()) {
      setError("Please enter your delivery address");
      return;
    }
    if (!isValidPhoneNumber(formData.phone)) {
      setError("Please enter a valid 11-digit phone number");
      return;
    }
    if (formData.email && !isValidEmail(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (cart.length === 0) {
      setError("Your cart is empty");
      return;
    }
    if (!window.confirm("Are you sure you want to place this order?")) return;

    setIsSubmitting(true);
    setError("");

    try {
      const orderDetails = {
        fields: {
          Name: formData.name,
          District: formData.district,
          Address: formData.address,
          Phone: formData.phone,
          ...(formData.email && { Email: formData.email }),
          "Products Ordered": cart.map((item) => 
            `${item.name} - Color: ${item.color} (x${item.amount})`
          ).join(", "),
          "Total Amount": total_amount + deliveryFee,
          "Order Date": new Date().toISOString().split("T")[0],
        },
      };

      await axios.post(
        `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_ORDERS_BASE}/${import.meta.env.VITE_AIRTABLE_ORDERS_TABLE}`,
        orderDetails,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_PERSONAL_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );

      clearCart();
      setTimeout(() => {
        navigate("/completed-order", { state: { orderDetails } });
      }, 1000);
    } catch (error) {
      console.error("Order submission error:", error);
      setError("Failed to place order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mx-auto max-w-4xl mt-8 px-6">
      <h2 className="text-center text-3xl font-bold mb-6">Cash on Delivery Checkout</h2>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Full Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className="w-full border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
          />
        </div>

        <div>
          <label htmlFor="district" className="block text-sm font-medium mb-2">
            District:
          </label>
          <select
            name="district"
            id="district"
            value={formData.district}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
          >
            <option value="">Select a district</option>
            {districts.map((district, index) => (
              <option key={index} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium mb-2">
            Delivery Address:
          </label>
          <textarea
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your complete delivery address"
            required
            rows="4"
            className="w-full border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
          ></textarea>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Mobile Number:
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter 11-digit mobile number"
            required
            pattern="[0-9]{11}"
            className="w-full border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address (Optional):
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address (optional)"
            className="w-full border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
          />
        </div>

        <div className="bg-gray-100 p-6 rounded-md">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          
          {/* Product list with colors */}
          <div className="mb-4">
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between mb-2 text-sm">
                <span>{item.name} - {item.color}</span>
                <span>x{item.amount}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between mb-3">
            <span>Subtotal:</span>
            <span>${total_amount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-3">
            <span>Shipping Fee:</span>
            <span>BDT{deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-xl">
            <span>Total Amount:</span>
            <span>${(total_amount + deliveryFee).toFixed(2)}</span>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 rounded-md text-white font-bold ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          } transition-colors mt-6`}
        >
          {isSubmitting ? "Processing Order..." : "Place Order"}
        </button>
      </form>
    </section>
  );
};

export default COD_Checkout;