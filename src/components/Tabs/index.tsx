import { useEffect, useState } from "react";
import { classNames } from "@/utils/index";
import { Tab } from "@headlessui/react";
import { TabsType } from "./Tabs.types";
import "./index.less";

const KEPTabs = ({ items, type, isVertical, defaultIndex, selectedIndex, onChange, height, panelsMarginOn }: TabsType) => {
  const [tabType, setTabType] = useState("primary");

  const setButtonGroupType = () => {
    switch (type) {
      case "lineType":
        setTabType("lineType");
        break;
      case "pillsType":
        setTabType("pillsType");
        break;
      default:
        setTabType("primary");
        break;
    }
  };

  useEffect(() => {
    setButtonGroupType();
  }, [type]);

  return (
    <div className={`DDU-tabs ${isVertical ? "vertical-type" : ""}`}>
      <Tab.Group manual vertical={isVertical} defaultIndex={defaultIndex} selectedIndex={selectedIndex} onChange={onChange}>
        <Tab.List className={`DDU-tab ${tabType}`}>
          {items.map((item: any) => (
            <Tab
              key={item.key}
              className={({ selected }) =>
                classNames(
                  "py-2.5 focus:outline-none",
                  selected ? "bg-white shadow text-blue-700" : "text-gray-400 hover:text-gray-600"
                )
              }
            >
              <span className="flex gap-2 items-center">
                {item.icon ? <>{item.icon}</> : ""}
                {item.label}
              </span>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className={`mt-12 ${height ? height : "h-48"}  ${panelsMarginOn ? "m-auto" : ""}`}>
          {items.map((item: any) => (
            <Tab.Panel key={item.key}>{item.childrenNode}</Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default KEPTabs;
