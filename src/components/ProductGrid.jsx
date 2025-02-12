import React from "react";
import { useProductsContext } from "../context/product/products_context";
import { ProductImage, Product_title } from "../components";

const ProductGrid = () => {
  const { 
    featured_products, 
    newArrival_products, 
    bestSeller_products,
    gaming_products
  } = useProductsContext();

  return (
    <section className="container mx-auto mt-12 space-y-10 px-4 md:mt-18 xl:px-20">
      {/* Featured Products */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="font-bold uppercase tracking-widest pb-3 text-orange-500 text-2xl sm:text-3xl">
          Featured
        </h2>
        <hr className="border-orange-500 mb-5" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {featured_products.slice(0, 6).map((product) => {
            const { id, sale, new_in_market } = product;
            return (
              <div
                key={id}
                className="group relative flex flex-col items-center space-y-3 border rounded-md p-4 bg-white"
              >
                {/* Product Image */}
                <div className="w-full h-44 flex justify-center items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>

                {/* Product Title */}
                <Product_title
                  product={product}
                  className="text-sm sm:text-base font-semibold text-center line-clamp-2"
                />

                {/* Sale Badge */}
                {sale && (
                  <div className="absolute -top-6 right-3 bg-red-500 px-3 py-1 text-[10px] uppercase tracking-wider text-white">
                    Sale
                  </div>
                )}

                {/* New In Market Badge */}
                {new_in_market && (
                  <div className="absolute -top-6 right-3 bg-green-500 px-3 py-1 text-[10px] uppercase tracking-wider text-white">
                    New
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Best Seller */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="font-bold uppercase tracking-widest pb-3 text-orange-500 text-2xl sm:text-3xl">
          Best Seller
        </h2>
        <hr className="border-orange-500 mb-5" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {bestSeller_products.slice(0, 6).map((product) => {
            const { id, sale, new_in_market } = product;
            return (
              <div
                key={id}
                className="group relative flex flex-col items-center space-y-3 border rounded-md p-4 bg-white"
              >
                {/* Product Image */}
                <div className="w-full h-44 flex justify-center items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>

                {/* Product Title */}
                <Product_title
                  product={product}
                  className="text-sm sm:text-base font-semibold text-center line-clamp-2"
                />

                {/* Sale Badge */}
                {sale && (
                  <div className="absolute -top-6 right-3 bg-red-500 px-3 py-1 text-[10px] uppercase tracking-wider text-white">
                    Sale
                  </div>
                )}

                {/* New In Market Badge */}
                {new_in_market && (
                  <div className="absolute -top-6 right-3 bg-green-500 px-3 py-1 text-[10px] uppercase tracking-wider text-white">
                    New
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* New Arrival */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="font-bold uppercase tracking-widest pb-3 text-orange-500 text-2xl sm:text-3xl">
          New Arrival
        </h2>
        <hr className="border-orange-500 mb-5" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {newArrival_products.slice(0, 6).map((product) => {
            const { id, sale, new_in_market } = product;
            return (
              <div
                key={id}
                className="group relative flex flex-col items-center space-y-3 border rounded-md p-4 bg-white"
              >
                {/* Product Image */}
                <div className="w-full h-44 flex justify-center items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>

                {/* Product Title */}
                <Product_title
                  product={product}
                  className="text-sm sm:text-base font-semibold text-center line-clamp-2"
                />

                {/* Sale Badge */}
                {sale && (
                  <div className="absolute -top-6 right-3 bg-red-500 px-3 py-1 text-[10px] uppercase tracking-wider text-white">
                    Sale
                  </div>
                )}

                {/* New In Market Badge */}
                {new_in_market && (
                  <div className="absolute -top-6 right-3 bg-green-500 px-3 py-1 text-[10px] uppercase tracking-wider text-white">
                    New
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Gamer's Paradise */}
      <div className="bg-blue-50 p-6 rounded-lg shadow-md">
        <h2 className="font-bold uppercase tracking-widest pb-3 text-blue-600 text-2xl sm:text-3xl">
          Gamer's Paradise
        </h2>
        <hr className="border-blue-600 mb-5" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {gaming_products.slice(0, 6).map((product) => {
            const { id, sale, new_in_market } = product;
            return (
              <div
                key={id}
                className="group relative flex flex-col items-center space-y-3 border rounded-md p-4 bg-white"
              >
                {/* Product Image */}
                <div className="w-full h-44 flex justify-center items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>

                {/* Product Title */}
                <Product_title
                  product={product}
                  className="text-sm sm:text-base font-semibold text-center line-clamp-2"
                />

                {/* Sale Badge */}
                {sale && (
                  <div className="absolute -top-6 right-3 bg-red-500 px-3 py-1 text-[10px] uppercase tracking-wider text-white">
                    Sale
                  </div>
                )}

                {/* New In Market Badge */}
                {new_in_market && (
                  <div className="absolute -top-6 right-3 bg-green-500 px-3 py-1 text-[10px] uppercase tracking-wider text-white">
                    New
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;