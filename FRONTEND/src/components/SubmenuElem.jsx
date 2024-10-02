import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

function SubmenuElem({ title = "Nazwa Działu" }) {
  const elems = [
    "Procedury zatrudnienia",
    "Stosowane umowy",
    "Pierwsze kroki",
    "Delegacje",
    "fiut",
  ];

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsOpen(mediaQuery.matches);

    const handleResize = () => {
      setIsOpen(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const handleSubmenuElems = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <h2
        onClick={handleSubmenuElems}
        className="menu-title flex flex-row gap-5 text-main-color text-xl font-bold -mx-2 cursor-pointer"
      >
        {title.toUpperCase()}
        <IoIosArrowDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </h2>
      <ul className={isOpen ? "flex flex-col" : "hidden"}>
        {elems.map((elem, index) => (
          <li key={index} className="border-l-2 border-main-color -ml-2">
            <a
              href="#"
              className="text-secondary-color hover:bg-main-color hover:text-white mx-2"
            >
              {elem}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default SubmenuElem;
