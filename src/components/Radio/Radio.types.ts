export type RadioType = {
  /* 라디오 버튼에 대한 라벨  */
  label: string | number;

  /* 라디오 버튼에 대한 value  */
  value?: string | number;

  /* 라디오 버튼에 대한 Disabled 처리 */
  isDisabled?: boolean;

  /* 라디오 버튼에 대한 checked 여부 */
  checked?: boolean;

  /* 라디오 버튼에 대한 readOnly 여부 */
  readOnly?: boolean;

  /* 라디오 버튼에 onChange 함수 적용하고자 하는 Element에 onChange 함수를 사용가능  */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
