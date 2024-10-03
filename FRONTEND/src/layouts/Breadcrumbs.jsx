import { IoMdHome, IoIosArrowForward } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import AddEmployeePage from "../pages/AddEmployeePage";

function Breadcrumbs() {
  const location = useLocation();

  const breadcrumbNames = {
    absence: "Nieobecności",
    employees: "Pracownicy",
    aboutCompany: "O Firmie",
    docs: "Dokumenty",
    departments: "Działy",
    failure: "Awaria sprzętu",
    vacationForm: "Formularz urlopowy",
    eventsCalendar: "Kalendarz wydarzeń",
    companyDocs: "Dokumenty spółki",
    mainDocs: "Dokumenty ogólne",
    detail: "Szczegóły",
    adminPanel: "Panel Admina",
    addEmployee: "Dodawanie pracownika",
  };

  const pages = location.pathname
    .split("/")
    .filter((page) => page !== "")
    .map((page, index, arr) => {
      const href = `/${arr.slice(0, index + 1).join("/")}`;
      const pageName =
        breadcrumbNames[page] || page.charAt(0).toUpperCase() + page.slice(1);
      return {
        name: pageName,
        href,
        current: index === arr.length - 1,
      };
    });

  return (
    <nav aria-label="Breadcrumb" className="flex">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <Link
              to="/"
              className="text-secondary-color hover:text-main-color flex flex-row gap-1"
            >
              <IoMdHome aria-hidden="true" className="h-5 w-5 flex-shrink-0" />
            </Link>
          </div>
        </li>

        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <IoIosArrowForward
                aria-hidden="true"
                className="h-5 w-5 flex-shrink-0 text-gray-500"
              />
              {page.current ? (
                <span className="ml-4 text-sm font-medium text-main-color">
                  {page.name}
                </span>
              ) : (
                <Link
                  to={page.href}
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-main-color"
                >
                  {page.name}
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
