
// Sidebar.js
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { BsX } from "react-icons/bs";
import { Logo } from "../components";
import { useProductsContext } from "../context/product/products_context";

const Sidebar = ({ categories, handleCategoryClick }) => {
  const { closeSidebar } = useProductsContext();
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        closeSidebar();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" onClick={closeSidebar} />
      
      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className="fixed top-0 right-0 left-0 z-40 h-screen w-2/3 space-y-5 overflow-y-auto bg-white px-5 shadow-xl md:hidden"
      >
        <div className="flex items-center justify-between py-4">
          <Logo className="text-xl" />
          <button
            onClick={closeSidebar}
            className="border border-black hover:border-primary hover:bg-primary hover:text-white"
          >
            <BsX className="h-6 w-6" />
          </button>
        </div>
        
        <div className="text-sm">
          <div className="mb-4">
            <button
              onClick={() => {
                handleCategoryClick("all");
                closeSidebar();
              }}
              className="w-full text-left py-2 px-3 hover:bg-gray-100 rounded-lg"
            >
              All Products
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => {
                  handleCategoryClick(category);
                  closeSidebar();
                }}
                className="w-full text-left py-2 px-3 hover:bg-gray-100 rounded-lg capitalize"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;