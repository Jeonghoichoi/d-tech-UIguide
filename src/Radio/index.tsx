import React, { InputHTMLAttributes } from "react";

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
  checked?: boolean;
}

const Radio: React.FC<RadioProps> = ({ name, value, checked, ...props }) => {
  return (
    <label>
      <input type="radio" name={name} value={value} checked={checked} {...props} />
      {value}
    </label>
  );
};

export default Radio;
