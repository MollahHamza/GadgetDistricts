import React, { useRef } from "react"
import { Link } from "react-router-dom"
import { useProductsContext } from "../context/product/products_context"
import { Loading, Error, ProductImage, Product_title } from "../components"
import { getUniqueValues } from "../utils/helper"
import { useFilterContext } from "../context/filter/filter_context"
import ReactGA from "react-ga4"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const HomeProduct = () => {
  const { products_loading, products_error } = useProductsContext()
  const {
    filters: { category },
    all_products,
    updateFilters,
    filtered_products: products,
  } = useFilterContext()

  const categoriesRef = useRef(null)

  const scrollCategories = (direction) => {
    if (categoriesRef.current) {
      const scrollAmount = direction === 'left' 
        ? -categoriesRef.current.offsetWidth 
        : categoriesRef.current.offsetWidth
      
      categoriesRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  if (products_loading) return <Loading />
  if (products_error) return <Error />

  const categories = getUniqueValues(all_products, "category")

  return (
    <>
      <section className="mt-20 md:mt-28">
        <div className="container mx-auto px-5 text-xs md:text-base xl:px-28 relative">
          {/* Scroll left button - only on desktop */}
          <button 
            onClick={() => scrollCategories('left')}
            className="hidden md:block absolute -left-10 top-1/2 transform -translate-y-1/2 z-10 bg-gray-100 p-2 rounded-full shadow-md"
          >
            <FaChevronLeft />
          </button>

          {/* Categories with horizontal scroll */}
          <div className="relative overflow-hidden">
            <div 
              ref={categoriesRef}
              className="scrollbar-hide flex space-x-5 overflow-x-auto pb-2 md:space-x-14 scroll-smooth"
            >
              {categories.map((categoryButton, index) => (
                <button
                  name="category"
                  key={index}
                  onClick={(e) => {
                    updateFilters(e)
                    ReactGA.event({
                      category: "example category",
                      action: "tab button clicked",
                      label: "Example Button",
                    })
                  }}
                  className={`
                    flex-shrink-0 snap-start text-start font-medium uppercase tracking-widest 
                    ${category === categoryButton 
                      ? "border-b-[1.8px] border-primary text-primary" 
                      : "text-gray-600"}
                    hover:text-primary transition-colors duration-200
                  `}
                >
                  {categoryButton}
                </button>
              ))}
            </div>
            {/* Gradient overlay to hint at more scrollable content */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent"></div>
          </div>

          {/* Scroll right button - only on desktop */}
          <button 
            onClick={() => scrollCategories('right')}
            className="hidden md:block absolute -right-10 top-1/2 transform -translate-y-1/2 z-10 bg-gray-100 p-2 rounded-full shadow-md"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Rest of the previous code remains the same */}
        <div className="container mx-auto mt-10 px-5 xl:px-28">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {products.slice(0, 8).map((product) => {
              const { id, sale, new_in_market } = product
              return (
                <article key={id} className="group relative space-y-5">
                  <ProductImage
                    product={product}
                    className="h-40 p-4 md:p-5 lg:h-44 xl:h-80 xl:p-8"
                  />
                  <Product_title product={product} />
                  {sale && (
                    <div className="absolute -top-7 right-3 bg-red-500 px-2 py-[2px] text-[8px] uppercase tracking-wider text-gray-100 xl:px-3 xl:text-xs">
                      <p>Sale</p>
                    </div>
                  )}
                  {new_in_market && (
                    <div className="absolute -top-7 right-3 bg-green-500 px-2 py-[2px] text-[8px] uppercase tracking-wider text-gray-100 xl:px-3 xl:text-xs">
                      <p>new</p>
                    </div>
                  )}
                </article>
              )
            })}
          </div>

          {/* Existing "Go to shop" section */}
          <div className="my-10 flex flex-row items-center justify-between space-x-4">
            <div className="w-2/3 border-b bg-gray-600 xl:w-2/5"></div>
            <Link
              to="/shop"
              className="w-full border border-primary py-3 text-center text-sm font-medium uppercase tracking-wider text-gray-700 md:w-1/2 xl:w-1/6 xl:text-base"
            >
              Go to shop
            </Link>
            <div className="w-2/3 border-b bg-gray-600 xl:w-2/5"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeProduct