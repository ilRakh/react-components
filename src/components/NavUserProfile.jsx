import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import NavUserProfileCard from "./NavUserProfileCard";

const NavUserProfile = ({}) => {
  const [toggleModal, setToggleModal] = useState(" hidden");
  const [changeColor, setChangeColor] = useState("text-white ");

  const NavUserProfileClasses = {
    FaUserAlt: "text-3xl lg:w-auto hover:cursor-pointer reference",
  };

  window.onclick = (e) => {
    if (e.target != document.firstChild.nextSibling) {
      if (
        !e.target.matches(".reference") &&
        !e.target.parentElement.matches(".reference")
      ) {
        setToggleModal(" hidden");
        setChangeColor("text-white ");
      }
    } else {
      setToggleModal(" hidden");
      setChangeColor("text-white ");
    }
  };

  return (
    <>
      <FaUserAlt
        className={changeColor + NavUserProfileClasses.FaUserAlt}
        onClick={() => {
          if (toggleModal === " hidden") {
            setChangeColor("text-cyan-300 ");
            setToggleModal(" ");
          } else {
            setChangeColor("text-white ");
            setToggleModal(" hidden");
          }
        }}
      />
      <NavUserProfileCard shown={toggleModal}></NavUserProfileCard>
    </>
  );
};

export default NavUserProfile;
