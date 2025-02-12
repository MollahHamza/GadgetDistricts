import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumb } from "../components";

const CompletedOrder = () => {
  // Access the order details passed via navigate
  const location = useLocation();
  const { orderDetails } = location.state || {}; // Default to an empty object if no state exists

  if (!orderDetails) {
    return (
      <div className="text-center">
        <p className="text-lg text-red-600">No order details found.</p>
      </div>
    );
  }

  // Extract order details from state
  const { fields } = orderDetails;
  const { Name, District, Address, Phone, Email, "Products Ordered": products, "Total Amount": totalAmount } = fields;

  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-5">
        {/* Breadcrumb Section */}
        <Breadcrumb title="Order Complete" />

        {/* Title Section */}
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6 animate-fadeUp">
          Thank You for Your Order!
        </h1>

        {/* Message Section */}
        <p className="text-lg text-center text-gray-600 mb-10">
          Your order has been placed successfully. We are preparing it for delivery.
        </p>

        {/* Order Details */}
        <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Order Summary</h3>
          <div className="space-y-3">
            <p><strong>Name:</strong> {Name}</p>
            <p><strong>District:</strong> {District}</p>
            <p><strong>Address:</strong> {Address}</p>
            <p><strong>Phone Number:</strong> {Phone}</p>
            {Email && <p><strong>Email Address:</strong> {Email}</p>}
            <p><strong>Products Ordered:</strong> {products}</p>
            <p className="font-bold text-lg text-gray-800"><strong>Total Amount:</strong> BDT{totalAmount}</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <Link to="/shop">
            <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CompletedOrder;
