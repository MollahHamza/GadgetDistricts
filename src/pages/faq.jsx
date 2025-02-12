import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Can I get Home delivery outside Dhaka?",
      answer: "Sure Sir. We provide home delivery all over Bangladesh.",
    },
    {
      question: "What is the delivery time?",
      answer: "The maximum delivery time is 72 hours, ensuring that you receive your items promptly and efficiently.",
    },
    {
      question: "Can I check the product before making the payment?",
      answer: "There is no option to check the product before you pay for the product. In case of any problem after purchase, we provide a 3 to 10-day checking warranty depending on the product.",
    },
    {
      question: "What is the delivery charge?",
      answer: (
        <>
          The delivery charge inside Dhaka city is 60 taka and the delivery charge outside the Dhaka city is 120 taka. The delivery charges are fixed and are not subject to changes for any locations across the country.
        </>
      ),
    },
    {
      question: "What are the conditions for return?",
      answer: "If the product has any manufacturing defects or if we shipped the incorrect item to you, you can return the product.",
    },
    {
      question: "How to return a product and what will it cost?",
      answer: (
        <>
          Product returns can be made through Sundarban Courier/Pathao/Steadfast to the location given in the Return and Refund policy. The cost will depend on your location and the delivery intermediaries.
        </>
      ),
    },
    {
      question: "How long will Gadgets District take to return the product?",
      answer: "Contact our support team as soon as the problem occurs with the product and they will give the details. The time depends on the product you want to return.",
    },
    {
      question: "How do I request a return?",
      answer: (
        <>
          To request a return, contact the support team at{" "}
          <a href="tel:+8801836318259" className="text-orange-500 underline">
            01836318259
          </a>
          . They will contact you with the details.
        </>
      ),
    },
    {
      question: "What devices are covered under Gadgets District Warranty?",
      answer: "You'll receive warranty for eligible devices purchased from us. Additionally, there is a checking warranty ranging from three to a maximum of seven days, depending on the product.",
    },
    {
      question: "What gadgets are covered under Gadgets District Warranty?",
      answer: (
        <>
          All gadget items are accompanied by a warranty for a thorough inspection period of 3-7 days. When filing a warranty claim for accessories (such as Smart Watch, Power Adapter, Cable, Bluetooth Speaker, etc.) covered by the official warranty, it is essential to retain both the box and the warranty sticker. The processing time for such claims may range from 3 to 15 business days.
        </>
      ),
    },
    {
      question: "Can Gadgets District change or modify its warranty policies?",
      answer: "Gadgets District reserves the right to make changes and modifications to their own warranty policy.",
    },
    {
      question: "How to place an order?",
      answer: (
        <>
          Visit gadgetsdistrict.com. Use the search bar on the Gadgets District website to find your desired product, like "Anker Soundcore R50i True Wireless Earbuds." Choose the color you want (black/blue/white) and click on "Buy Now" below the color options. Your chosen product will be added to the cart automatically, and you'll be directed to the easy-checkout page to fill in your billing details. Select your preferred payment method, either "Cash on Delivery" or "Online Payment" through bKash/Nagad/Debit/Credit Cards. Provide your full name, phone number, full address, etc. Make sure to check the "I have read and agree to the Terms and Conditions and Privacy Policy" box. Shortly after, you will receive a call to confirm your order.
        </>
      ),
    },
    {
      question: "How can I cancel my order?",
      answer: (
        <>
          You cannot personally cancel your order. To cancel your ordered product, wait for the confirmation call from Gadgets District. When you receive the call for confirmation, request for cancelling your order; your order will be canceled from your request. Alternatively, you can call our helpline number{" "}
          <a href="tel:+8801836318259" className="text-orange-500 underline">
            01836318259
          </a>{" "}
          to cancel your order.
        </>
      ),
    },
    {
      question: "Is there any hidden cost if I order from Gadgets District?",
      answer: (
        <>
          There is no hidden cost if you order from Gadgets District. You only have to pay the exact amount of the product cost you purchased. Although, if you choose home delivery for inside or outside Dhaka, there is a delivery charge that you have to pay as an additional charge for the delivery.
        </>
      ),
    },
    {
      question: "How can I change address or contact number after placing an order?",
      answer: (
        <>
          Once an order has been placed, it is not possible to modify the address directly. If you need to change the address or contact number, please contact our helpline at{" "}
          <a href="tel:+8801836318259" className="text-orange-500 underline">
            01836318259
          </a>{" "}
          and submit a request for the desired modification to your order.
        </>
      ),
    },
    {
      question: "What payment methods do you accept?",
      answer: (
        <>
          We accept the following payment methods:
          <ul className="list-disc pl-6 mt-2">
            <li>
              <strong>Bkash</strong> (Mobile payment system)
            </li>
            <li>
              <strong>Cash on Delivery (COD)</strong>
            </li>
          </ul>
          Note: We do not accept credit/debit cards or other payment methods at this time.
        </>
      ),
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "No, we currently ship only within Bangladesh. For international shipping, please stay tuned for future updates.",
    },
    {
      question: "What are your delivery charges?",
      answer: (
        <>
          Our delivery charges are as follows:
          <ul className="list-disc pl-6 mt-2">
            <li>
              <strong>Inside Dhaka:</strong> BDT 60
            </li>
            <li>
              <strong>Outside Dhaka:</strong> BDT 120
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "How long does delivery take?",
      answer:
        "Orders are usually processed within 1-2 business days. Delivery times may vary depending on your location.",
    },
    {
      question: "What is your return and exchange policy?",
      answer: (
        <>
          We accept returns and exchanges only under the following conditions:
          <ul className="list-disc pl-6 mt-2">
            <li>Only defective or incorrect items are eligible for return or exchange.</li>
            <li>The request must be made within 7 days of receiving the product.</li>
            <li>
              The product must be in its original condition, with packaging intact.
            </li>
          </ul>
          To initiate a return, please email us at{" "}
          <a
            href="mailto:gadgetsdiatrict25@gmail.com"
            className="text-orange-500 underline"
          >
            gadgetsdiatrict25@gmail.com
          </a>.
        </>
      ),
    },
    {
      question: "Do your products come with a warranty?",
      answer:
        "Some of our products include a warranty. Please check the product description for details. If you encounter issues with a product under warranty, contact us with proof of purchase at gadgetsdiatrict25@gmail.com.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is processed, you will receive a tracking ID via email or SMS. Use this ID to track your delivery. If you experience any issues, contact our support team.",
    },
    {
      question: "How can I contact you?",
      answer: (
        <>
          You can reach us through the following channels:
          <ul className="list-disc pl-6 mt-2">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:gadgetsdiatrict25@gmail.com"
                className="text-orange-500 underline"
              >
                gadgetsdiatrict25@gmail.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong> +8801836318259
            </li>
            <li>
              <strong>Office Address:</strong> 123/2, New Market, Dhaka, Bangladesh
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="container mx-auto my-12 px-5 space-y-8">
      {/* Page Title */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-orange-500">Frequently Asked Questions</h1>
        <p className="text-gray-700">
          Have questions? We're here to help. Click on a question to reveal the answer.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-md shadow-sm p-4 bg-white cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <h2 className="text-lg font-medium text-gray-800 flex justify-between">
              {faq.question}
              <span className="text-orange-500">{activeIndex === index ? "-" : "+"}</span>
            </h2>
            {activeIndex === index && (
              <div className="mt-3 text-gray-700 text-sm">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
