import Image from "next/image";
import React from "react";

export default function CardHorizontal({
  imageUrl,
  title,
  subtitle,
  content,
  url,
  urlText,
}) {
  return (
    <>
      {/*<!-- Component: Horizontal card--> */}

      <div className="flex flex-col overflow-hidden bg-white rounded-xl shadow-md text-slate-500 shadow-slate-200 sm:flex-row w-full lg:w-[1140px] lg:h-[300px] mx-4 my-4 md:my-8">
        {/*  <!-- Image --> */}
        <figure className="flex-1">
          <img
            src={imageUrl}
            alt="card image"
            className="object-cover min-h-full aspect-auto"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="flex-1 p-6 sm:mx-6 sm:px-0">
          <header className="flex gap-4 mb-4">
            <div>
              <h3 className="text-xl font-medium text-slate-700">{title}</h3>
              <p className="text-sm text-slate-400">{subtitle}</p>
            </div>
          </header>
          <p className="text-justify">{content}</p>
          {url !== "null" ? (
            <a href={url} target="_blank" rel="noreferrer">
              <span className="font-bold text-[#D51067] hover:text-[#850540] pt-2">{urlText}</span>
            </a>
          ) : null}
        </div>
      </div>

      {/*<!-- End Horizontal card--> */}
    </>
  );
}
