import { PopoverDirectionType, DateValueType } from 'react-tailwindcss-datepicker';

export interface DatepickerType {
  // 테마 선택 리스트는 아래와 같음.
  themeColor:
    | 'blue'
    | 'orange'
    | 'yellow'
    | 'red'
    | 'purple'
    | 'amber'
    | 'lime'
    | 'green'
    | 'emerald'
    | 'teal'
    | 'cyan'
    | 'sky'
    | 'indigo'
    | 'violet'
    | 'fuchsia'
    | 'pink'
    | 'rose'
    | undefined;

  // Date Value 선택 옵션
  value: DateValueType;

  // value 값을 하나만 선택하는지에 대한 옵션
  isSingleSelection?: boolean;

  // 클릭 시 노출 되는 팝업형태 1개 | 2개
  isMultiPopup?: boolean;

  // placeholder
  placeholder?: string | undefined;

  // value 값 사이 구분자
  separator?: string;

  // 오늘 / 어제 / 지난 7일 등 Utility 버튼
  isShowShortcuts?: boolean;

  // 하단 적용 / 취소 버튼 visible
  isShowFooter?: boolean;

  // 버튼 Disabled 여부
  disabled?: boolean;

  // up | down
  popoverDirection?: PopoverDirectionType | undefined;

  // onChange DateValueType = 라이브러리 제공 타입
  onChange: (value: DateValueType, e?: HTMLInputElement | null | undefined) => void;
}
