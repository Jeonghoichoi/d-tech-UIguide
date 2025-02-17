import { ToggleType } from "./Toggle.types";
import "./index.less";

const DDUToggle = ({ id, name, label, checked, isShortType, disabled, onChange }: ToggleType) => {
  return (
    <div className="DDU-toggle">
      <label htmlFor={id ? id : "checkbox"} className="relative h-8 w-14 cursor-pointer inline-flex items-center">
        <input
          type="checkbox"
          className="peer sr-only"
          id={id ? id : "checkbox"}
          name={name ? name : "checkbox"}
          disabled={disabled ? disabled : false}
          checked={checked}
          onChange={onChange}
        />
        <span
          className={`absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-blue-500 ${
            isShortType ? "h-4 my-auto" : ""
          } `}
        />
        <span
          className={`absolute inset-y-0 start-0 h-6 w-6 rounded-full bg-white transition-all ${
            isShortType ? "shadow border border-solid border-gray-200 peer-checked:start-8 my-1 mx-0" : "peer-checked:start-6 m-1"
          }`}
        />
      </label>
      {label && <div className="text-sm font-medium text-gray-900 dark:text-gray-300">{label}</div>}
    </div>
  );
};

export default DDUToggle;
