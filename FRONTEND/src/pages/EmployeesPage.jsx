import { useState, useEffect } from "react";
import { getAllEmployees } from "../API/employeeAPI";
import { getEmployeeProfileImage } from "../API/uploadsAPI";
import EmployeesFinder from "../components/EmployeesFinder";
import EmployeeInfo from "../components/EmployeeInfo";

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

  return (
    <section className="mx-5 bg-box-color rounded-md flex flex-col">
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
          />
        ))}
      </div>
    </section>
  );
}

export default EmployeesPage;
