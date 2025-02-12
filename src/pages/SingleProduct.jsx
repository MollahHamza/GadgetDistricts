import React, { useEffect, useState } from "react";
import { useProductsContext } from "../context/product/products_context";
import { single_product_url as url } from "../utils/constants";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Error,
  Loading,
  ProductImages,
  Breadcrumb,
  Stars,
} from "../components";
import { formatPrice } from "../utils/helper";
import { FiLink } from "react-icons/fi";
import { FaFacebookMessenger } from "react-icons/fa";
import { submitReview, fetchReviews } from "../utils/airtable";
import { useCartContext } from "../context/cart/cart_context";
import { marked } from "marked";
import { BsCheck } from "react-icons/bs";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const renderMarkdown = (text) => {
  const formattedText = text.replace(/\n/g, "<br />");
  const htmlContent = marked(formattedText);
  const styledContent = htmlContent.replace(/<strong>(.*?)<\/strong>/g, (match) => {
    return `<strong style="font-size: 1.2em">${match.slice(8, -9)}</strong>`;
  });

  return { __html: styledContent };
};

const SingleProduct = () => {
  const {
    single_product_loading: loading,
    single_product_error: error,
    singleProduct: product,
    fetchSingleProduct,
  } = useProductsContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useCartContext();

  const [shareLink, setShareLink] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(1);
  const [reviewer, setReviewer] = useState("");
  const [reviews, setReviews] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]);
  const [isShareButtonPopped, setIsShareButtonPopped] = useState(false);
  const [isAddToCartPopped, setIsAddToCartPopped] = useState(false);

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors?.[0]); // Set the default color when product is loaded
      fetchReviews(id)
        .then((data) => {
          setReviews(data);
        })
        .catch((error) => {
          console.error("Error fetching reviews:", error);
        });
    }
  }, [id, product]);

  const handleShare = () => {
    const productLink = `${window.location.origin}/shop/${id}`;
    setShareLink(productLink);

    navigator.clipboard
      .writeText(productLink)
      .then(() =>
        toast.success("Link Copied!", {
          position: "bottom-right",
          autoClose: 2000,
        })
      );

    setIsShareButtonPopped(true);
    setTimeout(() => setIsShareButtonPopped(false), 300);
  };

  const handleMessengerShare = () => {
    const productLink = `${window.location.origin}/shop/${id}`;

    // Check if it's a mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    if (isMobile) {
      // Mobile: Use m.me direct messaging link
      const messengerLink = `https://m.me/417694638090853?text=${encodeURIComponent(
        `Check out this product: ${productLink}`
      )}`;
      window.open(messengerLink, "_blank");
    } else {
      // Desktop: Use original Facebook Messenger link
      const messengerLink = `https://www.facebook.com/messages/t/417694638090853?text=${encodeURIComponent(
        ` ${productLink}`
      )}`;
      window.open(messengerLink, "_blank");
    }
  };

  const handleAddToCart = () => {
    if (quantity > product.stock) {
      toast.error("Quantity exceeds stock available.", {
        position: "bottom-right",
        autoClose: 2000,
      });
      return;
    }

    setIsAddToCartPopped(true);
    setTimeout(() => setIsAddToCartPopped(false), 300);

    addToCart(product.id, selectedColor, quantity, product);
    toast.success("Added to Cart!", {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  const handleBuyNow = () => {
    if (quantity > product.stock) {
      toast.error("Quantity exceeds stock available.", {
        position: "bottom-right",
        autoClose: 2000,
      });
      return;
    }
    addToCart(product.id, selectedColor, quantity, product);
    navigate("/cart");
    toast.success("Proceeding to checkout!", {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    if (!reviewText || reviewText.length < 5) {
      toast.error("Review must be at least 5 characters long.", {
        position: "bottom-right",
        autoClose: 2000,
      });
      return;
    }

    if (!reviewer || reviewer.length < 3) {
      toast.error("Please enter your name.", {
        position: "bottom-right",
        autoClose: 2000,
      });
      return;
    }

    try {
      const reviewData = {
        Product: [id],
        Review: reviewText,
        Rating: parseInt(reviewRating),
        Reviewer: reviewer,
        ReviewDate: new Date().toISOString().split("T")[0],
      };

      await submitReview(reviewData);
      toast.success("Review submitted successfully!", {
        position: "bottom-right",
        autoClose: 2000,
      });

      setReviewText("");
      setReviewRating(1);
      setReviewer("");
    } catch (error) {
      console.error("Review submission error:", error);
      toast.error("There was an error submitting your review.", {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };

  const handleStarClick = (rating) => {
    setReviewRating(rating);
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => {
      let newQuantity = prevQuantity + 1;
      if (newQuantity > product.stock) {
        newQuantity = product.stock;
      }
      return newQuantity;
    });
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => {
      let newQuantity = prevQuantity - 1;
      if (newQuantity < 1) {
        newQuantity = 1;
      }
      return newQuantity;
    });
  };

  if (loading) return <Loading />;
  if (error) return <Error />;

  if (!product) {
    return <div className="text-center text-gray-500">Loading product...</div>;
  }

  const { name, description, images, price, stock, colors, specifications } = product;

  return (
    <div className="w-full">
      <Breadcrumb title={name || "Product"} product />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ProductImages product={product} images={images} />

          <div className="space-y-6">
            <div>
              <span
                className={`rounded border px-4 py-2 text-xs font-medium capitalize ${
                  stock > 0
                    ? "border-green-500 text-green-500"
                    : "border-red-300 text-red-300"
                }`}
              >
                {stock > 0 ? "In stock" : "Out of stock"}
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <h4 className="text-3xl font-medium">{name}</h4>
              <button
                onClick={handleShare}
                className={`flex items-center justify-center w-10 h-10 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition ${
                  isShareButtonPopped ? "transform scale-90" : ""
                }`}
              >
                <FiLink className="text-xl" />
              </button>
              <button
                onClick={handleMessengerShare}
                className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
              >
                <FaFacebookMessenger className="text-xl" />
              </button>
            </div>

            <div className="font-light text-gray-500">
              {description
                ? description.split("\n").map((line, index) => (
                    <span key={index}>
                      {line.trim()}
                      <br />
                    </span>
                  ))
                : "No description available."}
            </div>

            <div className="space-y-4">
              <h5 className="text-2xl font-bold text-orange-500">
                {formatPrice(price)}
              </h5>

              {/* Color Selection */}
              <div className="flex items-center space-x-4">
  <span className="w-20 text-sm uppercase text-gray-500">Color:</span>
  <div className="flex items-center justify-center space-x-4">
    {colors?.map((color, index) => (
      <button
        key={index}
        onClick={() => setSelectedColor(color)}
        style={{ background: color }}
        className={`flex h-8 w-8 items-center justify-center rounded-full border-2 transition ${
          selectedColor === color
            ? "border-blue-500 scale-110"
            : "border-gray-300 hover:border-gray-500"
        }`}
      >
        {selectedColor === color && <BsCheck className="text-white" />}
      </button>
    ))}
  </div>
</div>


              {/* Quantity Selection */}
              <div className="flex items-center space-x-4">
                <label htmlFor="quantity" className="w-20 text-sm uppercase text-gray-500">
                  Quantity:
                </label>
                <div className="relative flex items-center justify-center">
                  <input
                    name="quantity"
                    id="quantity"
                    type="number"
                    min={1}
                    max={stock}
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="h-[40px] w-16 border-gray-200 text-center outline-none focus:border-gray-200 focus:ring-0 disabled:cursor-not-allowed"
                    aria-label="Quantity"
                  />
                  <span className="absolute -right-[23px] flex h-[40px] w-6 flex-col items-center justify-center space-y-[0.5px] border">
                    <button
                      title="Increase"
                      className="flex h-full w-full flex-col items-center justify-center border-b hover:bg-black"
                      onClick={increaseQuantity}
                    >
                      <BiChevronUp className="h-4 w-4 text-gray-500 hover:text-white" />
                    </button>
                    <button
                      title="Decrease"
                      className="flex h-full w-full flex-col items-center justify-center border-t hover:bg-black"
                      onClick={decreaseQuantity}
                    >
                      <BiChevronDown className="h-4 w-4 text-gray-500 hover:text-white" />
                    </button>
                  </span>
                </div>
              </div>

              {/* Add to Cart and Buy Now Buttons */}
              {stock >= 1 && (
                <div className="flex space-x-4 mt-4">
                  <button
                    onClick={handleAddToCart}
                    className={`px-6 py-3 bg-blue-500 text-white text-lg rounded-full hover:bg-blue-600 transition-all duration-300 ${
                      isAddToCartPopped ? "transform scale-95" : ""
                    }`}
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={handleBuyNow}
                    className="px-6 py-3 bg-orange-500 text-white text-lg rounded-full hover:bg-orange-600 transition-all duration-300"
                  >
                    Buy Now
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Full Width Specifications */}
        {product.specifications && (
          <div className="w-full mb-8">
            <hr className="border-t-2 border-gray-300 mb-4" />
            <div className="bg-gray-50 border p-6 rounded-lg w-full">
              <h3 className="text-lg font-bold text-orange-500 mb-2">
                Description and Specifications:
              </h3>
              <div
                className="text-gray-900"
                dangerouslySetInnerHTML={renderMarkdown(product.specifications)}
              />
            </div>
          </div>
        )}

        {/* Reviews Section */}
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>

          {reviews && reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-center space-x-2">
                  <Stars stars={review.fields.Rating} />
                  <span className="font-semibold">
                    {review.fields.Reviewer}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{review.fields.Review}</p>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-600">No reviews yet.</p>
          )}

          <form onSubmit={handleReviewSubmit} className="mt-6">
            <h3 className="text-lg font-medium mb-2">Submit Your Review</h3>
            <div className="flex items-center mb-4">
              <label className="mr-2">Rating:</label>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => handleStarClick(star)}
                    className={`w-8 h-8 text-3xl ${
                      star <= reviewRating ? "text-yellow-500" : "text-gray-300"
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>
            <input
              type="text"
              value={reviewer}
              onChange={(e) => setReviewer(e.target.value)}
              placeholder="Your name"
              className="border p-2 rounded w-full mb-4"
            />
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              rows="4"
              placeholder="Write your review here..."
              className="border p-2 rounded w-full mb-4"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;