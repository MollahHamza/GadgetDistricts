import React, { useState } from "react"
import { useProductsContext } from "../context/product/products_context"
import {
  Loading,
  Error,
  Grid_view_products,
  List_view_products,
} from "../components"
import { useFilterContext } from "../context/filter/filter_context"

const AllProducts = () => {
  const { products_loading, products_error } = useProductsContext()
  const { filtered_products: products, grid_view } = useFilterContext()
  const [visibleProducts, setVisibleProducts] = useState(30)

  if (products_loading) return <Loading />
  if (products_error) return <Error />

  const displayedProducts = products.slice(0, visibleProducts)

  const loadMoreProducts = () => {
    setVisibleProducts(prevVisible => prevVisible + 30)
  }

  const ProductView = grid_view ? Grid_view_products : List_view_products

  return (
    <div>
      <ProductView products={displayedProducts} />
      {visibleProducts < products.length && (
        <div className="flex justify-center mt-8">
          <button 
            onClick={loadMoreProducts}
            className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition-colors"
          >
            Load More Products
          </button>
        </div>
      )}
      {visibleProducts >= products.length && products.length > 0 && (
        <p className="text-center mt-4 text-gray-500">
          No more products to load
        </p>
      )}
    </div>
  )
}

export default AllProducts