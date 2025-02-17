import Datepicker from "react-tailwindcss-datepicker";
import { DatepickerType } from "./DatePicker.types";
import "./index.less";

const DDUDatePicker = ({
  themeColor,
  value,
  isSingleSelection,
  isMultiPopup,
  placeholder,
  separator,
  isShowShortcuts,
  isShowFooter,
  disabled,
  popoverDirection,
  onChange,
}: DatepickerType) => {
  const datePickerStrType = {
    today: "오늘",
    yesterday: "어제",
    past: "지난",
    currentMonth: "이번달",
    pastMonth: "지난달",
    cancel: "취소",
    apply: "선택",
  };
  return (
    <div className="DDU-datepicker">
      <Datepicker
        i18n={"ko"}
        primaryColor={themeColor} // ts 파일 참고!!
        containerClassName="relative"
        inputClassName="border border-solid border-gray-300 text-gray-900 text-sm rounded-lg p-2"
        value={value}
        useRange={isMultiPopup} // 선택 시 나오는 팝업 Display 컨트롤
        asSingle={isSingleSelection} // 날짜 선택 단일 옵션
        separator={separator ? separator : "to"}
        showShortcuts={isShowShortcuts} // 오늘, 어제, 지난 1주 등 옵션 버튼
        showFooter={isShowFooter} // 하단 적용 취소 버튼
        popoverDirection={popoverDirection}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        configs={{
          shortcuts: {
            today: datePickerStrType.today,
            yesterday: datePickerStrType.yesterday,
            past: (period) => `${datePickerStrType.past}-${period}일`, // 지난 7일에서 30일 선택 가능
            currentMonth: datePickerStrType.currentMonth, // 이번달
            pastMonth: datePickerStrType.pastMonth, // 지난달
          },
          footer: {
            cancel: datePickerStrType.cancel, // 취소
            apply: datePickerStrType.apply, // 선택 완료
          },
        }}
      />
    </div>
  );
};

export default DDUDatePicker;
