export type ToggleType = {
  // toggle 들어갈 id 값 htmlFor에 연결시키기 위함
  id?: string;

  // toggle에 들어갈 name 값
  name?: string;

  // toggle을 보조할 수 있는 레이블
  label?: string;

  // isShortType  => toggle button short version
  isShortType?: boolean;

  // toggle value = bollean 필수값
  checked: boolean;

  // disabled
  disabled?: boolean;

  // onChange 필수!
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
