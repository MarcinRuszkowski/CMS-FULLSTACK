function Select({ defOption, options, onChange }) {
  return (
    <select
      className="w-full rounded-md p-3 hover:rounded-full bg-bg-color border-2 border-main-color text-secondary-color"
      onChange={(e) => onChange(e.target.value)} // przekazanuie wybranej wartosci
    >
      <option value="" disabled>
        {defOption}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
