import { useEffect } from "react";
import { RadioType } from "./Radio.types";
import "./index.less";

// DDU Digital Technology Development UI
const DDURadio = ({ label, value, checked, isDisabled, readOnly, onChange }: RadioType) => {
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  useEffect(() => {}, [value, label, checked]);

  return (
    <div className="DDU-radio-container flex items-center">
      <input
        id={`${value}`}
        name={`${value}`}
        className="DDU-radio w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
        type="radio"
        aria-label={`${value}`}
        value={value}
        checked={checked}
        readOnly={readOnly}
        onChange={handleRadioChange}
        disabled={isDisabled}
      ></input>
      <label htmlFor={`${value}`} className={`ml-2 text-sm font-medium text-gray-900 ${readOnly && "readOnly"}`}>
        {label}
      </label>
    </div>
  );
};

export default DDURadio;
