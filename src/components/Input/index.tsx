import { useRef, useEffect, useState } from "react";
import Button from "@/components/Button";
import { EyeIcon } from "@heroicons/react/24/solid";
import { EyeSlashIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { maxLengthCheck } from "@/utils/index";
import { InputType } from "./Input.types";
import "./index.scss";

const DDUInputs = ({
  type,
  id,
  name,
  value,
  label,
  floatText,
  maxLength,
  helperText,
  placeholder,
  disabled,
  readOnly,
  required,
  icon,
  iconPosition,
  onSearch,
  onChange,
}: InputType) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const defaultMaxLength: number = 524288; // default 값

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const handleBlur = () => {
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const typeValidation = () => {
    if (type === "number") {
      // number일 경우 Icon 사용 X
      if (icon || iconPosition) {
        throw new Error("input type이 number이거나 password의 경우 icon을 사용할 수 없습니다.");
      }
    }
  };

  useEffect(() => {
    typeValidation();
  }, [type, icon, iconPosition, value]);

  const [togglePassword, setTogglePassword] = useState<boolean>(false);

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.key === "Enter") {
      if (onSearch) {
        onSearch(e);
      }
    }
  };

  return (
    <div className="kep-input-container">
      {label && (
        <label htmlFor={id} className="kep-input-label">
          {label}
          {required && <span className="required" />}
        </label>
      )}
      {/* floating 인풋 */}
      {type === "floating" ? (
        <div className="w-full flex flex-col">
          <div className="kep-input-floating relative h-10">
            <label
              htmlFor={id}
              className="floating-label relative block h-10 border-gray-200 focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 "
            >
              <input
                className={`kep-input peer placeholder-transparent sm:text-sm focus:placeholder-gray-400 placeholder-shown:text-sm ${
                  iconPosition === "start" && "pl-8"
                } `}
                ref={inputRef}
                type={type}
                id={id}
                name={name}
                value={value}
                placeholder={placeholder}
                maxLength={maxLength ? maxLength : defaultMaxLength}
                disabled={disabled}
                readOnly={readOnly}
                required={required}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={onChange}
              />
              {floatText && (
                <span
                  className={`pointer-events-none absolute start-2.5 p-[2px] -translate-y-1/2 bg-white text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:pl-[2px] ${
                    !value && "pl-8"
                  } peer-focus:text-xs`}
                >
                  {floatText}
                  {required && <span className="required" />}
                </span>
              )}
              <span
                className={`absolute top-1/2 -translate-y-2/4 ${iconPosition === "start" ? "left-2" : "right-2"} text-gray-500`}
              >
                {icon}
              </span>
            </label>
          </div>
          {helperText && (
            <p className="kep-input-helpertext text-xs text-left font-light px-4 py-1 text-gray-600 opacity-60 truncate">
              {helperText}
            </p>
          )}
        </div>
      ) : (
        <>
          <div className="w-full flex flex-col">
            <div className="relative h-10 w-full">
              <input
                className={`kep-input border-gray-200 border-solid border shadow-sm sm:text-sm px-2 ${
                  iconPosition === "start" && "pl-8"
                } `}
                ref={inputRef}
                type={togglePassword ? "text" : type}
                id={id}
                name={name}
                value={value}
                placeholder={placeholder}
                maxLength={maxLength ? maxLength : defaultMaxLength}
                disabled={disabled}
                readOnly={readOnly}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={onChange}
                onKeyUp={handleOnKeyPress}
                onInput={maxLengthCheck}
              />
              {type === "password" ? (
                <button
                  className="absolute top-1/2 -translate-y-2/4 right-2 text-gray-500"
                  onClick={() => {
                    setTogglePassword(!togglePassword);
                  }}
                >
                  {togglePassword ? <EyeSlashIcon className="w-4 h-4" /> : <EyeIcon className="w-4 h-4" />}
                </button>
              ) : (
                <span
                  className={`absolute top-1/2 -translate-y-2/4 ${iconPosition === "start" ? "left-2" : "right-2"} text-gray-500`}
                >
                  {icon}
                </span>
              )}
            </div>
            {helperText && (
              <p className="text-xs text-left font-light px-4 py-1 text-gray-600 opacity-60 truncate">{helperText}</p>
            )}
          </div>
          {type === "search" && (
            <div className="mb-auto">
              <Button
                type="secondary"
                size="m"
                label={<MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />}
                onClick={onSearch}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DDUInputs;
