export type AutoCompleteType = {
  // 확장성을 고려 data 타입 => any
  data: any;

  // 입력하고 선택된 value 값
  value: string;

  // 데이터 set onChange
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  // 데이터 selected 함수
  onSelectedChange: (value: {}) => void;
};
