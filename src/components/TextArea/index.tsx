import { useRef, useEffect } from "react";
import { TextAreaType } from "./TextArea.types";
import "./index.less";

const DDUTextArea = ({
  id,
  name,
  value,
  label,
  placeholder,
  readOnly,
  disabled,
  onKeyPress,
  onKeyDown,
  onPaste,
  onChange,
}: TextAreaType) => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const resizeTextArea = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "80px";
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
    }
  };

  useEffect(() => {
    resizeTextArea();
  }, [value]);

  return (
    <div className="kep-textArea">
      {label && (
        <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {label}
        </label>
      )}
      <textarea
        ref={textAreaRef}
        className="bg-white block p-2.5 w-full h-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
        onKeyPress={onKeyPress}
        onKeyDown={onKeyDown}
        onPaste={onPaste}
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default DDUTextArea;
