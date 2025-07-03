import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Page404() {
  const navigate = useNavigate();
  return (
    <div className="boxShadow px-10 w-full flex items-center flex-col justify-center pb-[50px] rounded-xl">
      <img
        src="https://i.ibb.co/nP1Cngw/Error-Server-1.png"
        alt="illustration"
        className="w-full lg:w-[500px]"
      />
      <h1 className="text-[#1C3177] dark:text-blue-600 text-[1.8rem] sm:text-[2.5rem] font-[800] mt-3 w-full lg:w-[55%] text-center">
        Thunder 404
      </h1>

      {/* Updated Button */}
      <button
        onClick={() => navigate("/")}
        className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium text-[#1C3177] transition duration-300 ease-out border-2 border-[#1C3177] rounded-full shadow-md group mt-4"
      >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#1C3177] group-hover:translate-x-0 ease">
          <FaArrowLeftLong className="w-5 h-5" />
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-[#1C3177] transition-all duration-300 transform group-hover:translate-x-full ease">
          Back to home
        </span>
        <span className="relative invisible">Back to home</span>
      </button>
    </div>
  );
}
