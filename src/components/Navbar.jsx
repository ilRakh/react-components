import { useState } from "react";
import NavLink from "./NavLink";
import NavBrowser from "./NavBrowser";
import NavUserProfile from "./NavUserProfile";
import { FaBars } from "react-icons/fa";

const NavbarClasses = {
  nav: "sm:bg-gray-900 sm:h-10 lg:bg-blue-900 lg:h-16 text-white grid w-full sm:grid-cols-1 sm:gap-1 lg:grid-cols-2 lg:gap-2 xl:grid-cols-3 xl:gap-4 select-none",
  navDiv: "inline-block",
  navDivDiv: "inline-block bg-blue-900 sm:p-4 sm:w-full lg:w-0 lg:p-0 lg:h-0",
  navDivDivFaBars: "sm:text-3xl lg:w-0 lg:h-0 hover:cursor-pointer",
  navDivDiv2: "lg:p-4  inline-block",
  navDivDiv2a: "lg:text-2xl",
  navDivUl:
    "lg:inline-block sm:w-full lg:w-auto lg:h-auto lg:ml-16 xl:w-auto sm:hidden",
  navDiv2:
    "lg:grid grid-cols-1 gap-1 lg:grid-cols-2 lg:col-span-1 xl:col-span-2",
  navDiv2Div: "lg:flex lg:w-auto lg: lg:justify-center sm:hidden",
  navDiv2Div2: "sm:absolute top-0 right-1 lg:flex justify-end mr-4 p-4",
};
const NavbarClassesResponsive = {
  nav: "sm:bg-gray-900 sm:h-auto lg:bg-blue-900 lg:h-16 text-white grid w-full sm:grid-cols-1 sm:gap-1 lg:grid-cols-2 lg:gap-2 xl:grid-cols-3 xl:gap-4 select-none",
  navDiv: "inline-block",
  navDivDiv: "inline-block bg-blue-900 sm:p-4 sm:w-full lg:w-0 lg:p-0 lg:h-0",
  navDivDivFaBars: "sm:text-3xl lg:w-0 lg:h-0 hover:cursor-pointer",
  navDivDiv2: "lg:p-4  inline-block",
  navDivDiv2a: "lg:text-2xl",
  navDivUl: "inline-block sm:w-full lg:w-auto lg:h-auto lg:ml-16 xl:w-auto",
  navDiv2: "grid grid-cols-1 gap-1 lg:grid-cols-2 lg:col-span-1 xl:col-span-2",
  navDiv2Div: "flex lg:w-auto lg: lg:justify-center",
  navDiv2Div2:
    "sm:absolute top-0 right-1 lg:flex justify-end mr-4 p-4 hidden",
};



const Navbar = () => {
  const [responsiveNavbar, setResponsiveNavbar] = useState(NavbarClasses);

  return (
    <nav className={responsiveNavbar.nav}>
      <div className={responsiveNavbar.navDiv}>
        <div className={responsiveNavbar.navDivDiv}>
          <FaBars
            className={responsiveNavbar.navDivDivFaBars}
            onClick={() => {
              if (responsiveNavbar === NavbarClasses) {
                setResponsiveNavbar(NavbarClassesResponsive);
              } else {
                setResponsiveNavbar(NavbarClasses);
              }
            }}
          ></FaBars>
        </div>
        <div className={responsiveNavbar.navDivDiv2}>
          <a href="#" className={responsiveNavbar.navDivDiv2a}>
            Cursos
          </a>
        </div>
        <ul className={responsiveNavbar.navDivUl}>
          <NavLink linkName="Link 1"></NavLink>
          <NavLink linkName="Link 2"></NavLink>
          <NavLink linkName="Link 3"></NavLink>
        </ul>
      </div>
      <div className={responsiveNavbar.navDiv2}>
        <div className={responsiveNavbar.navDiv2Div}>
          <NavBrowser></NavBrowser>
        </div>
        <div className={responsiveNavbar.navDiv2Div2}>
          <NavUserProfile></NavUserProfile>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
