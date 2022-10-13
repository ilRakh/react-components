import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const NavBrowser = () => {
  const [focus, setFocus] = useState("text-gray-400 ");
  const [placeholder, setPlaceholder] = useState("Buscar");

  const NavBrowserClasses = {
    form: "inline-block p-3 z-20 sm:w-full lg:w-auto",
    formFaSearch: " absolute sm:m-3 lg:top-3 lg:ml-4 lg:w-auto lg:text-lg",
    formInput:
      "sm:w-full sm:h-10 lg:w-96 lg:h-10 pl-10 rounded-sm placeholder:pl-2 text-black focus:outline outline-offset-1 outline-cyan-500 outline-2",
  };

  return (
    <form className={NavBrowserClasses.form}>
      <FaSearch
        id="search"
        className={focus + NavBrowserClasses.formFaSearch}
      ></FaSearch>
      <input
        type="text"
        className={NavBrowserClasses.formInput}
        placeholder={placeholder}
        onFocus={() => {
          setFocus("text-cyan-600");
          setPlaceholder(" ");
        }}
        onBlur={() => {
          setFocus("text-gray-400");
          setPlaceholder("Buscar");
        }}
      />
    </form>
  );
};

export default NavBrowser;
