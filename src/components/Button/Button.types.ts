export type ButtonType = {
  width?: string;
  height?: string;

  /* 버튼 크기에 대한 사이즈 S: 32px M: 40px L:48px 8배수 단위로 작업 진행 */
  size?: string;

  /* 버튼에 대한 타입 primary | secondary | soft | rounded 총 4가지 타입으로 구성 */
  type?: string;

  /* 버튼에 대한 Disabled 처리 */
  isDisabled?: boolean;

  /* 버튼에 대한 라벨, React.ReactNode 타입까지 적용함으로써 svg파일 까지 jsx 방식으로 적용 가능 */
  label?: string | number | React.ReactNode;

  /* 버튼에 onClick 함수 적용하고자 하는 Element에 onClick 함수를 사용가능  */
  onClick?: (event?: React.MouseEvent | React.KeyboardEvent | null) => void;
};
