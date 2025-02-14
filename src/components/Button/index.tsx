import React from "react";
import { useEffect, useState } from "react";
import { ButtonType } from "./Button.types";
import "./index.scss";

const DDUButton = ({ size, type, width, height, isDisabled, label, onClick }: ButtonType) => {
  const [buttonSize, setButtonSize] = useState("m");
  const [buttonType, setButtonType] = useState("primary");

  const setButtonGroupSize = () => {
    switch (size) {
      case "s":
        setButtonSize("small");
        break;
      case "lg":
        setButtonSize("large");
        break;
      default:
        setButtonSize("medium");
        break;
    }
  };

  const setButtonGroupType = () => {
    switch (type) {
      case "round":
        setButtonType("round");
        break;
      case "soft":
        setButtonType("soft");
        break;
      case "secondary":
        setButtonType("secondary");
        break;
      default:
        setButtonType("primary");
        break;
    }
  };

  useEffect(() => {
    setButtonGroupSize();
    setButtonGroupType();
  }, [size, type]);

  // 클릭 시 Ripple animation
  const handleRippleClick = (e: any) => {
    const tag = e.currentTarget;
    const ripple = document.createElement("div");
    const rect = tag.getBoundingClientRect();
    ripple.className = "animate";
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    ripple.style.opacity = `0.05`;
    ripple.style.background = `#${tag.dataset.color !== undefined ? tag.dataset.color : "e6e6e6"}`;
    ripple.style.setProperty("--kep-scale", tag.offsetWidth);
    tag.appendChild(ripple);
    setTimeout(function () {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 500);
  };

  useEffect(() => {
    const materialRippleElements = document.querySelectorAll(".kep-ripple");
    materialRippleElements.forEach((tag) => {
      tag.addEventListener("click", handleRippleClick);
    });

    return () => {
      materialRippleElements.forEach((tag) => {
        tag.removeEventListener("click", handleRippleClick);
      });
    };
  }, []);

  return (
    <button
      disabled={isDisabled}
      type="button"
      className={`kep-button min-w-[52px] button-size-${buttonSize} button-type-${buttonType} kep-ripple`}
      onClick={onClick}
      style={{ width: String(width), height: String(height) }}
    >
      {label}
    </button>
  );
};

export default DDUButton;
