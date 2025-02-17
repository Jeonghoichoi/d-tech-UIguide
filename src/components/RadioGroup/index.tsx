import React from "react";
import Radio from "@/components/Radio";
import { RadioGroupType } from "./RadioGroup.types";
import "./index.less";

// DDU Digital Technology Development UI
const DDUButtonGroup = ({ value, orientation, children, onChange }: RadioGroupType) => {
  // React.Children.toArray를 사용하여 children을 배열로 변환
  const childArray = React.Children.toArray(children);

  // 모든 자식 요소를 검사하여 <Button> 컴포넌트가 아닌 경우 예외 발생
  childArray.forEach((child) => {
    if (!React.isValidElement(child) || child.type !== Radio) {
      throw new Error("RadioGroup 컴포넌트의 자식 요소는 모두 Radio 컴포넌트여야 합니다.");
    }
  });

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div
      className={`DDU-radioGroup inline-flex gap-x-4 ${orientation ? "vertical" : "horizontal"}`}
      role="radiogroup"
      aria-label="radiogroup"
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === Radio) {
          return React.cloneElement(<Radio label={child.props.label} value={child.props.value} />, {
            checked: child.props.value === value,
            onChange: handleRadioChange,
          });
        }
        return child;
      })}
    </div>
  );
};

export default DDUButtonGroup;
