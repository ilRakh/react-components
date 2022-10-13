import { FaUserCircle } from "react-icons/fa";


const NavUserProfileCard = ({shown}) => {
  const NavUserProfileCardClasses = {
    div: "sm:fixed sm:top-3 md:absolute md:top-0 bottom-0 left-0 sm:w-full sm:h-full md:-right-3 md:mt-2 -z-10 select-none",
    divDiv:
      "bg-gray-900 text-white sm:w-full sm:h-full sm:mt-12 md:float-right md:mt-16 md:w-64 md:h-48 rounded-t-sm",
    divDivDiv:
      "text-center border-gray-900 border-solid border-2 border-b-0 rounded-t-sm pb-5",
    divDivDivH1: "text-3xl mt-2 font-thin",
    divDivDivFaUserCircle: "w-full mt-2 mb-4 text-8xl",
    divDivDiv2: "text-center font-bold",
    divDivDiv2Div:
      "sm:block sm:w-auto sm:h-11 sm:m-2 md:m-0 md:inline-block text-white text-base bg-blue-400 hover:bg-blue-500 hover:cursor-pointer md:w-32 md:h-12 border-gray-900 border-solid md:border-2 border-r-0 pt-2 rounded-bl-sm",
    divDivDiv2Div2:
      "sm:block sm:w-auto sm:h-11 sm:m-2 md:m-0 md:inline-block text-white text-base bg-blue-400 hover:bg-blue-500 hover:cursor-pointer md:w-32 md:h-12 border-gray-900 border-solid md:border-2 rounded-br-sm pt-2",
  };

  return (
    <div
      className={NavUserProfileCardClasses.div + shown}
    >
      <div
        className={NavUserProfileCardClasses.divDiv}
        onClick={(e) => {
          e.stopPropagation;
        }}
      >
        <div className={NavUserProfileCardClasses.divDivDiv}>
          <h1 className={NavUserProfileCardClasses.divDivDivH1}>Usuario</h1>
          <FaUserCircle
            className={NavUserProfileCardClasses.divDivDivFaUserCircle}
          ></FaUserCircle>
        </div>
        <div className={NavUserProfileCardClasses.divDivDiv2}>
          <div className={NavUserProfileCardClasses.divDivDiv2Div}>
            <p>Ingresar</p>
          </div>
          <div className={NavUserProfileCardClasses.divDivDiv2Div2}>
            <p>Registrarse</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavUserProfileCard;
