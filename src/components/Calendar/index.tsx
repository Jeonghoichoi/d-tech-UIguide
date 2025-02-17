import { useState } from "react";
import Calendar from "react-calendar";
import { CalendarType } from "./Calendar.types";
import "./index.scss";
const DDUCalendar = ({ nextLabel, next2Label, prevLabel, prev2Label, selectRange }: CalendarType) => {
  type ValuePiece = Date | null;
  type Value = ValuePiece | [ValuePiece, ValuePiece];
  const [value, onChange] = useState<Value>(new Date());
  return (
    <Calendar
      selectRange={selectRange} //range선택 가능
      onChange={onChange}
      value={value}
      className="DDU-calendar" //kep-calendar의 css 포함
      nextLabel={nextLabel} // 다음 달 가는 버튼 아이콘
      next2Label={next2Label} // 다음 년 가는 버튼 아이콘
      prevLabel={prevLabel} // 이전 달 가는 버튼 아이콘
      prev2Label={prev2Label} // 이전 년 가는 버튼 아이콘
    />
  );
};

export default DDUCalendar;
