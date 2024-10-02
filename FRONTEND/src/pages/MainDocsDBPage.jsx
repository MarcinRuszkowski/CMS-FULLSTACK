import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import SubmenuElem from "../components/SubmenuElem";

function MainDocsDBPage() {
  const [searchText, setSearchText] = useState("");
  const [filteredElems, setFilteredElems] = useState([]);

  const elems = [
    "Procedury zatrudnienia",
    "Stosowane umowy",
    "Pierwsze kroki",
    "Delegacje",
    "Marketing - Social Media",
    "Marketing - Badania rynku",
    "IT - Bezpieczeństwo",
    "IT - Wsparcie techniczne",
  ];

  const handleSearchChange = (e) => {
    const text = e.target.value;
    setSearchText(text);

    if (text === "") {
      setFilteredElems([]);
    } else {
      const filtered = elems.filter((elem) =>
        elem.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredElems(filtered);
    }
  };

  return (
    <>
      <section className="flex flex-col bg-box-color p-10 gap-5 sm:mx-5 rounded-md items-center">
        <p className="font-medium text-4xl text-main-color">
          Witaj w Bazie Wiedzy Grupy PTWP
        </p>
        <p className="text-secondary-color ">
          Znajdziesz tutaj opis większości procedur, które organizują naszą
          pracę. Skorzystaj zatem z wyszukiwarki lub przejdź do katalogu
          procedur.
        </p>

        <div className="w-full relative">
          <input
            type="search"
            value={searchText}
            onChange={handleSearchChange}
            className="w-full h-10 bg-bg-color border-main-color text-secondary-color py-2 px-2 truncate border-2 shadow rounded-md"
            placeholder="Wpisz słowo kluczowe i poczekaj na podpowiedź"
          />
          <CiSearch className="cursor-pointer absolute right-0 top-0 rounded-md bg-main-color text-white w-auto h-full" />
        </div>

        <ul className="menu flex-col md:flex-row md:flex-wrap gap-10">
          {filteredElems.length > 0
            ? filteredElems.map((title, index) => (
                <SubmenuElem key={index} title={title} />
              ))
            : elems.map((title, index) => (
                <SubmenuElem key={index} title={title} />
              ))}
        </ul>
      </section>
    </>
  );
}

export default MainDocsDBPage;
