import React from "react";

interface ButtonGroupProps {
  label: string;
  onClick: () => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default ButtonGroup;
