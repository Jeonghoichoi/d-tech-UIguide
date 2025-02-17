import { useState, useEffect, useRef } from "react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { AutoCompleteType } from "./AutoComplete.types";
import "./index.scss";

const DDUAutoComplete = ({ data, value, onChange, onSelectedChange }: AutoCompleteType) => {
  const [filteredData, setFilteredData] = useState<any>(data); // 데이터 형식은 자율성을 준다.
  const [isFilterDataVisible, setIsFilterDataVisible] = useState<boolean>(false); // data focus control

  const filterData = (name: string) => {
    // value 값에 따른 data 필터링 처리
    const filteredResult =
      name === ""
        ? data
        : data.filter((item: any) => {
            return item.name.toLowerCase().includes(name.toLowerCase());
          });

    setFilteredData(filteredResult);
  };

  useEffect(() => {
    if (typeof value !== "string") {
      throw new Error("AutoComplete value 타입은 string 타입만 허용합니다!");
    }
    filterData(value);
  }, [value]);

  // 검색창 외 공간 클릭시 함수 실행
  const searchRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleFocus = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", handleFocus);
    return () => {
      document.addEventListener("mousedown", handleFocus);
    };
  }, [searchRef]);

  // focus
  const focusText = useRef<any>(null);
  const inputRef = useRef<any>(null);

  const handleinputKeyDown = (e: React.Attributes) => {
    if (e.key === "ArrowDown") {
      focusText.current.children[0].focus();
    }
    if (e.key === "Escape") {
      handleClose();
    }
  };

  const handleKey = (e: React.Attributes, item: any, index: number) => {
    if (e.key === "Enter") {
      onSelectedChange(item);
      handleClose();
    }
    if (e.key === "ArrowDown") {
      focusText.current.children[filteredData.length - 1 > index ? index + 1 : 0].focus(); //마지막 list에서 focus 첫번째로 이동
    }
    if (e.key === "ArrowUp") {
      index > 0 ? focusText.current.children[index - 1].focus() : inputRef.current.focus(); //첫번째 list에서 focus input으로 이동
    }
    if (e.key === "Escape") {
      handleClose();
    }
  };
  const handleClose = () => {
    setIsFilterDataVisible(false);
  };

  const handleSelectedValue = (item: any) => {
    onSelectedChange(item);
    handleClose();
  };

  return (
    <div ref={searchRef} className="kep-autoComplete">
      <input
        ref={inputRef}
        onKeyDown={handleinputKeyDown}
        value={value}
        type="text"
        id="inputName"
        placeholder="입력하세요."
        onFocus={() => {
          setIsFilterDataVisible(true);
        }}
        onChange={onChange}
        autoComplete="off"
        className="w-full rounded-md border-gray-200 border-solid border shadow-sm sm:text-sm h-10 px-2 pe-10 dark:bg-slate-900 text-gray-600"
      />
      <span className="absolute inset-y-0 end-0 w-10 h-10 grid place-content-center dark:text-gray-400">
        <ChevronUpDownIcon className="w-4 h-4" />
      </span>

      {value.length >= 0 && isFilterDataVisible ? (
        <ul
          ref={focusText}
          className="z-10 rounded border border-solid border-gray-200 absolute w-full bg-white shadow max-h-50 overflow-y-auto dark:bg-slate-900 text-gray-600"
        >
          {filteredData.length === 0 ? (
            <li className="relative cursor-default select-none p-2 text-gray-700 text-sm">찾는 내용 없음</li>
          ) : (
            filteredData &&
            filteredData.map((item: any, index: number) => (
              <li
                tabIndex={0}
                key={item.id}
                className="hover:bg-gray-50 cursor-pointer p-2 text-sm focus-visible:bg-blue-500 focus-visible:text-white outline-none"
                onClick={() => {
                  handleSelectedValue(item);
                }}
                onKeyDown={(e) => {
                  e.preventDefault();
                  handleKey(e, item, index);
                }}
              >
                {item.name}
              </li>
            ))
          )}
        </ul>
      ) : null}
    </div>
  );
};

export default DDUAutoComplete;
