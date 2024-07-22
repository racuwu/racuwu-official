import NumberSpring from "../NumberSpring";

const NumberSpringBanner = () => {
  const products = [
    {
      name: "Most Outstanding Club",
      description: "club of the year",
      number: "0",
      year: "2021-2022",
      icon: null,
    },
    {
      name: "Wew Diyawara",
      description: "Most sustainable community service initiative",
      number: "0",
      year: "2021 -2022",
      icon: null,
    },
    {
      name: "Miridiya",
      description: "Most outstanding inter regional initiative",
      number: "0",
      year: "2021 -2022",
      icon: null,
    },
    { name: "Awards", description: "2013 - Present", number: "50", icon: null },
  ];

  return (
    <div
      className="w-full h-auto lg:h-[60vh] flex justify-center mt-8 bg-center bg-cover gradient-radial bg-fixed relative"
      style={{
        backgroundImage: "url('assets/images/bg/awards-covers-scaled.webp')",
      }}
    >
      <div className="absolute w-full h-full h-fill bg-black/75"></div>
      <div className="w-full xl:w-[1140px] 2xl:w-[1440px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-12 text-white text-xl py-8 z-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center w-full"
          >
            <div className="text-6xl p-4 text-white ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M12 7a8 8 0 1 1 0 16a8 8 0 0 1 0-16m0 2a6 6 0 1 0 0 12a6 6 0 0 0 0-12m0 1.5l1.322 2.68l2.958.43l-2.14 2.085l.505 2.946L12 17.25l-2.645 1.39l.505-2.945l-2.14-2.086l2.958-.43zM18 2v3l-1.363 1.138A9.935 9.935 0 0 0 13 5.049V2zm-7-.001v3.05a9.935 9.935 0 0 0-3.636 1.088L6 5V2z"
                ></path>
              </svg>
            </div>
            <div className="p-2 text-4xl font-bold flex">
              <div className={product.number < 50 ? "hidden" : "flex"}>
                {/* <NumberSpring n={product.number} /> */}
                50+
              </div>
              {product.year}
            </div>
            <div className="uppercase text-center">{product.name}</div>
            <div className="uppercase text-center text-sm">
              {product.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberSpringBanner;
