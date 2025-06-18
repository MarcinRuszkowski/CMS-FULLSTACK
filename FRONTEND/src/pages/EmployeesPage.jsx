import { useState, useEffect, useRef } from "react";
import { getAllEmployees } from "../API/employeeAPI";
import { getEmployeeProfileImage } from "../API/uploadsAPI";
import EmployeesFinder from "../components/EmployeesFinder";
import EmployeeInfo from "../components/EmployeeInfo";
import { EmployeeDetails } from "../components/EmployeeDetails";

function EmployeesPage() {
  const [employeesData, setEmployeesData] = useState([]);
  const [selectedCompanyOptions, setSelectedCompanyOptions] = useState([]);
  const [selectedLocationOptions, setSelectedLocationOptions] = useState([]);
  const [selectedDepartmentOptions, setSelectedDepartmentOptions] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");

  const [companyOptions, setCompanyOptions] = useState([]);
  const [locationOptions, setLocationOptions] = useState([]);
  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [employeesImages, setEmployeesImages] = useState({});

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalRef = useRef(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const employees = await getAllEmployees();
        setEmployeesData(employees);
      } catch (error) {
        console.error("Błąd podczas pobierania danych:", error);
      }
    };

    fetchEmployees();
  }, []);

  useEffect(() => {
    const companies = new Set();
    const locations = new Set();
    const departments = new Set();

    employeesData.forEach((employee) => {
      companies.add(employee.company);
      locations.add(employee.city);
      departments.add(employee.department);
    });

    setCompanyOptions(Array.from(companies));
    setLocationOptions(Array.from(locations));
    setDepartmentOptions(Array.from(departments));
  }, [employeesData]);

  useEffect(() => {
    const fetchImages = async () => {
      const images = {};
      for (const employee of employeesData) {
        if (employee.profileImage) {
          try {
            const imageUrl = await getEmployeeProfileImage(
              employee.profileImage
            );
            images[employee._id] = imageUrl;
          } catch (error) {
            console.error("Error fetching profile image:", error);
          }
        }
      }
      setEmployeesImages(images);
    };

    fetchImages();
  }, [employeesData]);

  const filteredEmployees = employeesData.filter((employee) => {
    const companyMatch =
      selectedCompanyOptions.length === 0 ||
      selectedCompanyOptions.includes(employee.company);
    const locationMatch =
      selectedLocationOptions.length === 0 ||
      selectedLocationOptions.includes(employee.city);
    const departmentMatch =
      selectedDepartmentOptions.length === 0 ||
      selectedDepartmentOptions.includes(employee.department);

    const nameMatch =
      searchText === "" ||
      employee.name.toLowerCase().includes(searchText.toLowerCase());

    return companyMatch && locationMatch && departmentMatch && nameMatch;
  });

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedEmployee(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <section className="flex absolute md:static md:flex-row">
      {/* <div className="md:w-[50%] w-full"></div> */}
      <div className="mx-5 bg-box-color rounded-md flex flex-1 flex-col">
        <EmployeesFinder
          selectedCompanyOptions={selectedCompanyOptions}
          setSelectedCompanyOptions={setSelectedCompanyOptions}
          selectedLocationOptions={selectedLocationOptions}
          setSelectedLocationOptions={setSelectedLocationOptions}
          selectedDepartmentOptions={selectedDepartmentOptions}
          setSelectedDepartmentOptions={setSelectedDepartmentOptions}
          companyOptions={companyOptions}
          locationOptions={locationOptions}
          departmentOptions={departmentOptions}
          searchText={searchText}
          setSearchText={setSearchText}
        />

        <div className="overflow-y-auto max-h-screen">
          {filteredEmployees.map((employee) => (
            <EmployeeInfo
              key={employee._id}
              name={employee.name}
              company={employee.company}
              job={employee.job}
              department={employee.department}
              city={employee.city}
              profileImage={employeesImages[employee._id] || null}
              onClick={() => handleEmployeeClick(employee)}
            />
          ))}
        </div>
      </div>
      {isModalOpen && selectedEmployee && (
        <div
          ref={modalRef}
          className="bg-box-color p-5 rounded-lg shadow-md relative w-[45%]"
        >
          <button
            className="absolute top-0 left-2 text-gray-600 hover:text-gray-700 text-4xl"
            onClick={closeModal}
          >
            &times;
          </button>
          <EmployeeDetails employee={selectedEmployee} />
        </div>
      )}
    </section>
  );
}

export default EmployeesPage;
