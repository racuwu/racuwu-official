import { AiFillLinkedin, AiFillGithub, AiFillFacebook, AiOutlineGlobal } from "react-icons/ai";

const MemberCard = (props) => {
  return (
    <div className="bg-[white] drop-shadow-md rounded-xl transform hover:scale-103 duration-300 hover:shadow-lg">
      {/* <a href={props.portfolio} target="_blank" rel="noopener noreferrer"> */}
        <div className="p-2">
        <img
          className="h-full w-full object-cover object-top rounded-t-lg"
          src={props.image}
          alt="Profile Picture"
        />
        </div>

        <div className="p-4">
          <h2 className="mb-2 text-lg font-medium text-gray-900">
            {props.name}
          </h2>
          <p className="mb-2 text-base text-gray-700">{props.postition}</p>
          <div className="flex items-center">
            <a className="mr-2 text-xl font-semibold  text-[#0052D4]" href={props.linkedin} target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />{" "}
            </a>
            <a
              className="text-xl mr-2  font-medium  text-[#0052D4]"
              href={props.github}
              target="_blank" rel="noopener noreferrer"
            >
              <AiFillGithub />{" "}
            </a>
            <a
              className="text-xl  font-medium  text-[#0052D4]"
              href={props.fb}
              target="_blank" rel="noopener noreferrer"
            >
              <AiFillFacebook />{" "}
            </a>
            <a
              className="ml-auto text-xl font-medium text-[#0052D4]"
              href={props.portfolio}
              target="_blank" rel="noopener noreferrer"
            >
              <AiOutlineGlobal />{" "}
            </a>
          </div>
        </div>
      {/* </a> */}
    </div>
  );
};

export default MemberCard;
