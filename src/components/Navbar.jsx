// Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { Sidebar, Logo, Cart_Button } from "../components";
import { useProductsContext } from "../context/product/products_context";
import { useFilterContext } from "../context/filter/filter_context";
import { getUniqueValues } from "../utils/helper";

const Navbar = () => {
  const { openSidebar, isSidebarOpen, products } = useProductsContext();
  const { 
    filters: { text },
    all_products,
    updateFilters 
  } = useFilterContext();
  
  const navigate = useNavigate();

  const categories = getUniqueValues(all_products, "category").filter(
    (category) => category.toLowerCase() !== "all"
  );

  const handleSearchChange = (e) => {
    updateFilters(e);
    navigate('/shop');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate('/shop');
  };

  const handleCategoryClick = (categoryName) => {
    const button = document.createElement('button');
    button.textContent = categoryName;
    button.name = 'category';
    
    const event = {
      target: button
    };
    
    updateFilters(event);
    navigate('/shop');
  };

  return (
    <>
      <nav className="bg-gray-100 py-4 xl:py-6 relative z-20">
        <div className="container mx-auto flex flex-col items-center justify-between px-5 md:flex-row xl:max-w-screen-xl xl:px-28">
          <div className="flex justify-between w-full md:w-auto items-center">
            <Link to="/">
              <Logo className="text-3xl text-black" />
            </Link>
            <button
              type="button"
              aria-label="Open Sidebar"
              onClick={openSidebar}
              className="md:hidden border border-black p-1 hover:border-gray-700 hover:bg-gray-700 hover:text-white"
            >
              <BsList className="h-6 w-6" />
            </button>
          </div>

          <form
            onSubmit={handleSearchSubmit}
            className="w-full max-w-md md:max-w-lg mt-4 md:mt-0"
          >
            <input
              type="text"
              name="text"
              placeholder="Search products..."
              value={text}
              onChange={handleSearchChange}
              className="w-full rounded-lg border border-gray-300 py-2 px-4 text-sm focus:border-black focus:ring-1 focus:ring-gray-600 focus:outline-none"
            />
          </form>

          <div className="hidden md:flex">
            <Cart_Button className="text-black hover:text-gray-700" />
          </div>
        </div>

        {/* Categories - Only visible on desktop */}
        <div className="hidden md:block mt-3 md:mt-4 overflow-x-auto pb-4">
          <div className="flex items-center justify-center space-x-4 md:space-x-6 px-4 sm:px-8">
            <button
              name="category"
              onClick={() => handleCategoryClick("all")}
              className="rounded-full border border-gray-300 px-3 py-1 text-gray-700 transition duration-200 hover:bg-gray-200 hover:text-black"
            >
              All
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                name="category"
                onClick={() => handleCategoryClick(category)}
                className="rounded-full border border-gray-300 px-3 py-1 text-gray-700 transition duration-200 hover:bg-gray-200 hover:text-black"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {isSidebarOpen && <Sidebar categories={categories} handleCategoryClick={handleCategoryClick} />}
    </>
  );
};

export default Navbar;
