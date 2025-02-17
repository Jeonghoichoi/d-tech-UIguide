export type QuantityInputType = {
  // input value ...
  value: number;

  // gap default 1
  gap?: number;

  // 선택된 데이터를 Set 해주는 함수.
  onChangeNumber: (value: number) => void;
};
