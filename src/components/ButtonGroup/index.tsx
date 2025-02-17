import React, { useEffect, useState } from "react";
import Button from "@/components/Button/index";
import { ButtonGroupType } from "./ButtonGroup.types";
import "./index.less";

// DDU Digital Technology Development UI
const DDUButtonGroup = ({ orientation, children }: ButtonGroupType) => {
  const [childrenSize, setChildrenSize] = useState<number>(0);

  // React.Children.toArray를 사용하여 children을 배열로 변환
  const childArray = React.Children.toArray(children);

  // 모든 자식 요소를 검사하여 <Button> 컴포넌트가 아닌 경우 예외 발생
  childArray.forEach((child) => {
    if (!React.isValidElement(child) || child.type !== Button) {
      throw new Error("ButtonGroup 컴포넌트의 자식 요소는 모두 Button 컴포넌트여야 합니다.");
    }
  });

  useEffect(() => {
    if (Array.isArray(children)) {
      setChildrenSize(children.length);
    }
  }, [children]);

  return (
    <div
      className={`DDU-buttonGroup inline-flex rounded-md shadow-sm ${orientation ? "vertical" : "horizontal"}`}
      data-length={childrenSize}
      role="group"
      aria-label="Button Group"
    >
      {children}
    </div>
  );
};

export default DDUButtonGroup;
