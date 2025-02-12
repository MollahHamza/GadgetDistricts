import React, { useState } from "react";
import { Breadcrumb } from "../components";

const ReturnPolicy = () => {
  const [language, setLanguage] = useState("en"); // default to English

  return (
    <section>
      {/* Language Toggle */}
      <div className="text-center my-4">
        <button
          onClick={() => setLanguage("en")}
          className={`px-4 py-2 rounded ${language === "en" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          English
        </button>
        <button
          onClick={() => setLanguage("bn")}
          className={`px-4 py-2 rounded ${language === "bn" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          বাংলা
        </button>
      </div>

      <Breadcrumb title={language === "en" ? "Return Policy" : "রিটার্ন পলিসি"} />

      <div className="container mx-auto px-5 py-10 text-gray-700 xl:px-28">
        <h1 className="text-center text-2xl font-bold text-gray-500 mb-6">
          {language === "en" ? "Return Policy Details" : "রিটার্ন পলিসি"}
        </h1>
        
        <p className="mb-4">
          {language === "en"
            ? "We wish you every purchase with a good experience with the right product. Even though if there is any manufacturing fault or if the delivered product is wrong, we are offering an exchange or return facility. To claim a return or exchange you must take an unboxing video. Without the unboxing video, we will not accept the return or exchange request."
            : "আমরা আপনার প্রতিটি কেনাকাটায় সঠিক পণ্য পাওয়ার জন্য একটি ভাল অভিজ্ঞতা কামনা করি। তবুও, যদি কোনো উৎপাদনগত ত্রুটি থাকে অথবা সরবরাহিত পণ্য ভুল হয়, তবে আমরা এক্সচেঞ্জ বা রিটার্ন সুবিধা প্রদান করছি। রিটার্ন বা এক্সচেঞ্জ দাবি করতে আপনাকে একটি আনবক্সিং ভিডিও নিতে হবে। আনবক্সিং ভিডিও ছাড়া আমরা রিটার্ন বা এক্সচেঞ্জ দাবি গ্রহণ করব না।"}
        </p>

        <h2 className="text-lg font-semibold mb-2">
          {language === "en" ? "Conditions Not Applicable for Return, Exchange, Refund, or Warranty:" : "যেসব শর্ত রিটার্ন, এক্সচেঞ্জ, রিফান্ড বা ওয়ারেন্টির জন্য প্রযোজ্য নয়:"}
        </h2>
        <ul className="list-disc ml-6 mb-4">
          {language === "en"
            ? [
                "Physical Damage or burnt items",
                "If the intact seal is torn or damaged",
                "Any accessories, chargers, or adapters",
                "Gift items that are not paid for",
                "Items missing accessories, papers, or original packaging",
                "Incompatibility with third-party apps, software, or devices",
              ].map((condition, index) => <li key={index}>{condition}</li>)
            : [
                "পণ্যের শারীরিক ক্ষতি বা পুড়ে যাওয়া",
                "যদি সীলটি ছিঁড়ে যায় বা ক্ষতিগ্রস্ত হয়",
                "কোনো এক্সেসরিজ, চার্জার বা অ্যাডাপ্টার",
                "যে গিফট আইটেমের জন্য টাকা দেয়া হয়নি",
                "যে পণ্যের এক্সেসরিজ, কাগজপত্র বা মূল প্যাকেজিং অনুপস্থিত",
                "থার্ড-পার্টি অ্যাপস, সফটওয়্যার বা ডিভাইসের সাথে অসামঞ্জস্য",
              ].map((condition, index) => <li key={index}>{condition}</li>)}
        </ul>

        <h2 className="text-lg font-semibold mb-2">
          {language === "en" ? "Return Process:" : "রিটার্ন প্রক্রিয়া:"}
        </h2>
        <ul className="list-disc ml-6 mb-4">
          {language === "en"
            ? [
                "You must return all the boxes, warranty cards, manuals, accessories, stickers, labels, and gift items with the proper box and without putting any sticky tape on the product.",
                "You need to bring the item to our office or send it via courier to our office address, and you need to pay the courier charge while sending the package to us.",
                "After receiving the product, we will check and notify you of the status. If a refund is required, it will be processed within 72 hours of receiving the items.",
                "If the fault lies with the product, we will bear the courier charge. Additional charges will be borne by the customer.",
                "If the customer receives any discount, cashback, or gift, it should be returned before the refund."
              ].map((step, index) => <li key={index}>{step}</li>)
            : [
                "আপনাকে পণ্যের সঙ্গে থাকা সব বক্স, ওয়ারেন্টি কার্ড, ম্যানুয়াল, এক্সেসরিজ, স্টিকার, লেবেল এবং গিফট আইটেম সঠিক প্যাকেজিং সহ ফিরিয়ে দিতে হবে এবং পণ্যের উপর কোনো স্টিকি টেপ লাগানো যাবে না।",
                "আপনাকে আমাদের অফিসে আইটেমটি নিয়ে আসতে হবে অথবা কুরিয়ারের মাধ্যমে আমাদের অফিসে পাঠাতে হবে, এবং পণ্য পাঠানোর জন্য কুরিয়ার চার্জ আপনাকেই দিতে হবে।",
                "পণ্যটি পাওয়ার পর আমরা সেটি পরীক্ষা করব এবং আপনাকে অবস্থা জানিয়ে দেব। যদি রিফান্ড প্রয়োজন হয়, তবে সেটি 72 ঘণ্টার মধ্যে প্রক্রিয়া করা হবে।",
                "যদি পণ্যের ত্রুটি থাকে, তবে কুরিয়ার চার্জ আমাদের পক্ষ থেকে বহন করা হবে, তবে অতিরিক্ত চার্জ গ্রাহককেই বহন করতে হবে।",
                "যদি গ্রাহক কোনো ডিসকাউন্ট, ক্যাশব্যাক বা গিফট পান, তবে রিফান্ডের আগে সেগুলি ফিরিয়ে দিতে হবে।"
              ].map((step, index) => <li key={index}>{step}</li>)}
        </ul>

        {/* Contact Information (always in English) */}
        <h2 className="text-lg font-semibold mb-2">Contact Information:</h2>
        <p className="mb-4">
          If there is any issue, please let us know within 24 hours by email at <strong>gadgetsdiatrict25@gmail.com</strong>.
        </p>
        <p className="mb-4">
          <strong>DropShop</strong><br />
          House# 305, Lift-5, Johur Tower, Elephant Road, Dhaka-1205<br />
          Contact Person: Mr. Anik / Mr. Rasel<br />
          Contact Number: <strong>01329-669775</strong>
        </p>

        <div className="text-center mt-10">
          <a
            href="https://wa.me/8801836318259"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full shadow-md"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReturnPolicy;
