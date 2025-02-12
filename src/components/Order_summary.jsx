import React from "react";
import { useCartContext } from "../context/cart/cart_context";
import { formatPrice } from "../utils/helper";
import { Link } from "react-router-dom";

const Order_summary = ({ beginCheckout }) => {
  const { total_amount, total_items } = useCartContext();

  return (
    <>
      <section className="mb-5 md:mb-0 md:w-full lg:w-1/2">
        <h4 className="flex items-center py-2 text-xl font-medium capitalize tracking-widest">
          Order summary
        </h4>
        <hr />
        <article className="mt-9 space-y-4 border-b-4 border-dashed border-white bg-gray-200/70 px-4 pt-8 pb-12 text-sm">
          <h5 className="flex items-center justify-between">
            Bag total{" "}
            <span className="text-lg text-black">{formatPrice(total_amount)}</span>
          </h5>
        </article>
        <h5 className="bg-blu-100/60 flex items-center justify-between bg-gray-100 bg-gray-200/70 py-8 px-4 text-sm font-medium">
          Subtotal{" "}
          <span className="text-xl font-medium text-black">
            {formatPrice(total_amount)}
          </span>
        </h5>
        <div onClick={beginCheckout}>
          <Link
            to="/checkout"
            className="mt-5 block w-full bg-orange-500 py-4 text-center uppercase tracking-widest text-white transition-all duration-300 ease-linear hover:bg-orange-600"
          >
            Proceed to buy{" "}
            <span className="capitalize">
              ({total_items} item{total_items > 1 && "s"})
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Order_summary;
