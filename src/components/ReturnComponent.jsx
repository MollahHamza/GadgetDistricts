import React from "react";
import { Link } from "react-router-dom";

const ReturnComponent = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <section className="bg-gray-100 py-5 text-center">
      <h2 className="text-xl font-semibold text-gray-700 mb-3">
        Easy Returns & Refund Policy
      </h2>
      <p className="text-gray-600 mb-4">
        We make sure you have the best shopping experience. Learn more about our return policy.
      </p>
      <Link
        to="/returnpolicy"
        onClick={handleScrollToTop}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded shadow"
      >
        Learn About Returns
      </Link>
    </section>
  );
};

export default ReturnComponent;
