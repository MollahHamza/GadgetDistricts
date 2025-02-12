import React, { Suspense, lazy } from "react"
import { useProductsContext } from "../context/product/products_context"
import { Loading } from "../components"
import ReturnComponent from "../components/ReturnComponent" // Import the ReturnComponent

const HomeProduct = lazy(() => import("../components/HomeProduct"))
const BasketProduct = lazy(() => import("../components/Basket"))
const Header = lazy(() => import("../components/Header"))
const Instagram = lazy(() => import("../components/Instagram"))
const ProductCategory = lazy(() => import("../components/ProductCategory"))
const ProductGrid = lazy(() => import("../components/ProductGrid"))

const Home = () => {
  const { products_loading: loading } = useProductsContext()
  
  if (loading) return <Loading />
  
  return (
    <div className="overflow-x-hidden w-full">
      <Suspense fallback={<Loading />}>
        <Header />
        <HomeProduct />
        <BasketProduct />
        <ProductGrid />
        {/* <ProductCategory /> */}
        <Instagram />
        <div className="mt-10">
          <ReturnComponent />
        </div>
      </Suspense>
    </div>
  )
}

export default Home
