import { useState, useRef, useEffect } from "react";

const MultiSelectWithCheckboxes = ({
  label,
  options,
  selectedOptions,
  setSelectedOptions,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleToggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClearAll = () => {
    setSelectedOptions([]);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div className="flex justify-between items-center">
        <p className="text-main-color font-medium text-base">{label}</p>
        {selectedOptions.length > 0 && (
          <button
            onClick={handleClearAll}
            className="text-secondary-color hover:text-gray-500 text-xl font-bold"
          >
            &times; {/* ikona x */}
          </button>
        )}
      </div>

      <div
        className="border border-main-color rounded-md hover:rounded-full py-2 px-3 cursor-pointer"
        onClick={handleToggleDropdown}
      >
        <div className="flex flex-wrap gap-2">
          {selectedOptions.length > 0 ? (
            selectedOptions.map((option) => (
              <div
                key={option}
                className="flex items-center bg-main-color text-white px-2 py-1 rounded-full text-sm"
              >
                {option}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggleOption(option);
                  }}
                  className="ml-2 text-white hover:text-gray-400"
                >
                  &times;
                </button>
              </div>
            ))
          ) : (
            <span className="text-gray-500">Wybierz opcje...</span>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-md bg-box-color shadow-secondary-color shadow">
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center p-2 hover:bg-bg-color"
            >
              <input
                type="checkbox"
                className="checkbox mr-2 [--chkfg:white] border-2 hover:border-main-color"
                checked={selectedOptions.includes(option)}
                onChange={() => handleToggleOption(option)}
              />
              <span className="text-secondary-color font-medium">{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectWithCheckboxes;
