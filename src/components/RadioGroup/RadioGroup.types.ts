export type RadioGroupType = {
  value?: string | number;
  /* 라디오 버튼 그룹 내 자식 버튼 정렬 vertical | horizontal  */
  orientation?: string;

  /* 라디오 버튼 그룹내에 자식 요소의 타입  */
  children?: React.ReactNode;

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
