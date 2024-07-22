import React from "react";

export default function FeaturesCard({ imageUrl, title, subtitle, content }) {
  return (
    <>
      {/* <!-- Component: Basic blog card --> */}
      <div className="overflow-hidden rounded-xl shadow-md shadow-slate-300 hover:shadow-slate-400 hover:shadow-md p-2">
        {/* <!-- Image --> */}
        <figure>
          <img
            src={imageUrl} // Use the imageUrl prop for dynamic image source
            alt="card image"
            className="h-[200px] w-full object-cover object-center rounded-t-lg hover:scale-105 duration-300"
          />
        </figure>
        {/* <!-- Body--> */}
        <div className="p-4">
          <header className="mb-4">
            <h3 className="text-xl font-semibold text-[#D51067]">
              {title} {/* Use the title prop for dynamic title */}
            </h3>
            <p className="text-sm text-slate-400"> {subtitle} </p> {/* Use the date prop for dynamic date */}
          </header>
          <p className="text-justify">
            {content} {/* Use the content prop for dynamic content */}
          </p>
        </div>
      </div>
      {/* <!-- End Basic blog card --> */}
    </>
  );
}
