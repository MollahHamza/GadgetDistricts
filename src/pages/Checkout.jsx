import React from "react"
import { Stripe_Checkout } from "../components"
import { COD_Checkout } from "../components"

const Checkout = () => {
  return (
    <>
      <section className=" container mx-auto  flex justify-center px-28 ">
        {/* <Stripe_Checkout /> */}
        <COD_Checkout/>
      </section>
    </>
  )
}

export default Checkout
