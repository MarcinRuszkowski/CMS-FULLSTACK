function Select({ defOption, options, value, onChange }) {
  return (
    <select
      className="w-full rounded-md p-3 hover:rounded-full bg-bg-color border-2 border-main-color text-secondary-color"
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">{defOption}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
