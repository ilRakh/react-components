const NavLink = ({linkName}) => {

  const NavLinkClasses = {
    li: "sm:block sm:w-full sm:hover:bg-gray-800 lg:hover:bg-transparent lg:inline-block lg:w-auto",
    lia: "inline-block sm:text-xl sm:w-full sm:py-3 lg:text-xl lg:w-auto text-white px-4 hover:text-cyan-300",
  };

  return (
    <li className={NavLinkClasses.li}>
      <a href="#" className={NavLinkClasses.lia}>
        {linkName}
      </a>
    </li>
  );
};

export default NavLink;
