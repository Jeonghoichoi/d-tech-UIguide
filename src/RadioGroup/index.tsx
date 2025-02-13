import React from "react";

interface RadioGroupProps {
  label: string;
  onClick: () => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default RadioGroup;
