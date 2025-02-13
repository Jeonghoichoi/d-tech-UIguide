import React from "react";

interface RadioProps {
  label: string;
  onClick: () => void;
}

const Radio: React.FC<RadioProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Radio;
