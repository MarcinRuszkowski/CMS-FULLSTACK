import MultiSelectWithCheckboxes from "../components/MultiSelectWithCheckboxes";

function EmployeesFinder({
  selectedCompanyOptions,
  setSelectedCompanyOptions,
  selectedLocationOptions,
  setSelectedLocationOptions,
  selectedDepartmentOptions,
  setSelectedDepartmentOptions,
  companyOptions,
  locationOptions,
  departmentOptions,
  searchText,
  setSearchText,
}) {
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="flex flex-col gap-5 px-5 py-3 border-b-2 shadow">
      <input
        type="search"
        className="bg-bg-color text-secondary-color border-2 border-main-color rounded-md hover:rounded-full p-2 px-3"
        placeholder="Imię i nazwisko pracownika"
        value={searchText}
        onChange={handleSearchChange}
      />
      <div className="flex flex-col gap-5 md:flex-row md:justify-between">
        <MultiSelectWithCheckboxes
          label="Firma"
          options={companyOptions}
          selectedOptions={selectedCompanyOptions}
          setSelectedOptions={setSelectedCompanyOptions}
        />

        <MultiSelectWithCheckboxes
          label="Lokalizacja"
          options={locationOptions}
          selectedOptions={selectedLocationOptions}
          setSelectedOptions={setSelectedLocationOptions}
        />

        <MultiSelectWithCheckboxes
          label="Dział"
          options={departmentOptions}
          selectedOptions={selectedDepartmentOptions}
          setSelectedOptions={setSelectedDepartmentOptions}
        />
      </div>
    </div>
  );
}

export default EmployeesFinder;
