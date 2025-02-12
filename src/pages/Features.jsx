import React, { Suspense, lazy } from "react"
import { Link } from "react-router-dom"
import { Breadcrumb } from "../components"

const ProductGrid = lazy(() => import("../components/ProductGrid"))

const Features = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-5">
        {/* Breadcrumb Section */}
        <Breadcrumb title="Features" />

        {/* Title Section with Animation */}
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6 
          animate-fadeUp">
          Explore Our Featured Products
        </h1>

        {/* Product Grid */}
        <Suspense fallback={<div className="text-center text-lg">Loading products...</div>}>
          <ProductGrid />
        </Suspense>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <Link to="/shop">
            <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300">
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Features
