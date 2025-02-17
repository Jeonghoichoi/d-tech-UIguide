import { Fragment, useState, useEffect } from "react";
import { scrollLock, classNames } from "@/utils/index";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { SelectsType } from "./Selects.types";
import "./index.scss";

const DDUSelects = ({ width, height, items, selectedMeta, onChange }: SelectsType) => {
  // 너비 및 높이값 계산
  const [selectsWidth, setSelectsWidth] = useState<string>("");
  const [selectsHeight, setSelectsHeight] = useState<string>("");

  useEffect(() => {
    setSelectsWidth(width ? width : "350");
    setSelectsHeight(height ? height : "40");
  }, [width, height]);

  // Scroll Control
  const [isScrollLock, setIsScrollLock] = useState<boolean>(false);

  const handleFocus = () => {
    setIsScrollLock(true);
  };

  const handleBlur = () => {
    setIsScrollLock(false);
  };

  useEffect(() => {
    scrollLock(isScrollLock);
  }, [isScrollLock]);

  return (
    <Listbox value={selectedMeta} onChange={onChange}>
      {({ open }) => (
        <>
          <Listbox.Label className="hidden">선택박스</Listbox.Label>
          <div className={`relative`} style={{ width: selectsWidth ? selectsWidth + "px" : "100%" }}>
            <Listbox.Button
              className={`relative w-full cursor-default rounded-md bg-white dark:bg-slate-900 text-gray-600 py-1.5 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              style={{ height: selectsHeight + "px" }}
            >
              <span className="flex items-center">
                {selectedMeta?.avatar && <img src={selectedMeta.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />}
                {selectedMeta?.name && <span className="ml-2 block truncate">{selectedMeta.name}</span>}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterEnter={handleFocus}
              afterLeave={handleBlur}
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-[120px] top-[40px] w-full overflow-auto rounded-md bg-white dark:bg-slate-900 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {items.map((item: any) => (
                  <Listbox.Option
                    key={item.id}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-indigo-600 text-white" : "text-gray-600",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          {item.avatar && <img src={item.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />}
                          {item.name && (
                            <span className={classNames(selected ? "font-semibold" : "font-normal", "ml-2 block truncate")}>
                              {item.name}
                            </span>
                          )}
                        </div>
                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default DDUSelects;
