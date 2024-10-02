function SearchInput({ selectedDepartment, setSelectedDepartment }) {
  return (
    <div className="flex flex-col">
      <label htmlFor="department" className="font-medium text-main-color">
        Wybierz dział
      </label>
      <select
        value={selectedDepartment}
        onChange={(e) => setSelectedDepartment(e.target.value)}
        className="rounded-md hover:rounded-full p-2 mt-2 min-w-60 text-secondary-color bg-box-color border-2 border-main-color"
      >
        <option value="dowolny">Dowolny dział</option>
        <option value="IT">IT</option>
        <option value="Marketing">Marketing</option>
        <option value="Księgowość">Księgowość</option>
      </select>
    </div>
  );
}

export default SearchInput;
