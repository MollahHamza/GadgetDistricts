import React from 'react'
import Instagram1 from "../assets/mouse.webp"
import Instagram2 from "../assets/keyboard.avif"
import Instagram3 from "../assets/headphonex.jpeg"
import Instagram4 from "../assets/controller.jpeg"
import Blog3 from "../assets/pc.jpg"

const Instagram = () => {
  return (
    <section className=" container relative mx-auto mt-20 hidden grid-cols-5 px-5 md:mt-28 md:grid xl:px-0 ">
      <img
        width={300}
        height={200}
        src={Instagram1}
        alt=""
        className="h-44 w-full object-cover object-center xl:h-72 xl:w-72"
      />
      <img
        src={Instagram2}
        alt=""
        className="h-44 w-full object-cover object-center xl:h-72 xl:w-72"
      />
      <img
        src={Instagram3}
        alt=""
        className="h-44 w-full object-cover object-center xl:h-72 xl:w-72"
      />
      <img
        src={Instagram4}
        alt=""
        className="h-44 w-full object-cover object-center xl:h-72 xl:w-72"
      />
      <img
        src={Blog3}
        alt=""
        className="h-44 w-full object-cover object-center xl:h-72 xl:w-72"
      />
      <div className="absolute top-1/3 right-1/3">
        <a
          href="https://www.instagram.com/gadgets_district_?igsh=MmY2YnJwcWlqdnk1"  // Replace with your Instagram link
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className="rounded-md bg-white/80 px-12 py-4 text-3xl font-semibold uppercase tracking-widest text-gray-500 xl:px-32 xl:py-6">
            Instagram
          </h4>
        </a>
      </div>
    </section>
  )
}

export default Instagram
