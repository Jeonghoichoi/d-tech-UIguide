export type SelectsType = {
  // selects UI 넓이 값
  width?: string;
  // selects UI 높이 값
  height?: string;
  // props로 받는 데이터 타입
  items: SelectsItems[];

  // 선택된 데이터 -> onChange 함수를 통해 선택된 데이터를 상위 컴포넌트로 보낸다.
  selectedMeta: SelectsItems | undefined;

  // 선택된 데이터를 Set 해주는 함수.
  onChange?: (value: SelectsItems) => void;
};

type SelectsItems = {
  id: number;
  name: string;
  avatar?: string;
  [key: string | number]: any; // 다른 필드를 수용할 수 있도록 인덱싱된 타입 추가
  value?: string;
};
