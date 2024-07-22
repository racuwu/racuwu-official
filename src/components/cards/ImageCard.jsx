import Image from "next/image";


const ImageCard = (props) => {


  return (
    <>
      <div
        className={`relative flex flex-col justify-center overflow-hidden rounded-xl h-[260px]`}
      >
        <div className="group relative m-0 flex rounded-xl sm:mx-auto sm:max-w-lg bg-[white] drop-shadow-md transform hover:shadow-lg">
          <div
            className={`z-10 p-2 h-[250px] w-[360px] overflow-hidden rounded-xl opacity-100 transition duration-300 ease-in-out group-hover:opacity-100 dark:opacity-100`}
            
          >
            <Image
              src={props.imageUrl}
              className="animate-fade-in block h-full w-[384px] rounded-md scale-100 transform object-cover object-center opacity-100 transition duration-700 lg:group-hover:scale-110"
              alt=""
              width={384}
              height={250}
            />
          </div>
          {/* <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out lg:group-hover:-translate-y-1 lg:group-hover:translate-x-3 lg:group-hover:scale-110">
            <h1 className="text-xl font-semibold text-white">{props.title}</h1>
            <h2 className="text-sm font-light text-gray-100 drop-shadow-xl pr-2">
              {props.subtitle}
            </h2>
          </div> */}
        </div>
      </div>
      
    </>
  );
};

export default ImageCard;
