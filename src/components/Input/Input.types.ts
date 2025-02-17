export type InputType = {
  // input type -> text | password | email | number | floating | search ... 타입 입력  default 값 - text
  type: string;

  // input에 들어갈 id 값 htmlFor에 연결시키기 위함
  id: string;

  // input에 들어갈 name 값 Ex: name:username, name:password
  name: string;

  // input value ...
  value: string | number;

  // input 태그를 보조해 줄 수 있는 label 값
  label?: string;

  // floating Input 사용 시 보조 텍스트가 위로 애니메이션 처리됨
  floatText?: string | number;

  // input에  입력 받을 떄의 최대 값'
  maxLength?: number | undefined;

  // input 태그 하단에 출력되는 helperText로 사용자에게 정보를 알려주기 위한 용도로 사용!
  helperText?: string;

  // placehoder값이 필요한 경우  default 값은 '입력해주세요.'
  placeholder?: string;

  // disabled input 필수 값
  disabled?: boolean;

  // readonly input 읽기 값
  readOnly?: boolean;

  // require input 필수 값
  required?: boolean;

  // React.ReactNode = icon은 jsx 방식으로 적용 */
  icon?: React.ReactNode;

  // icon position = start | end 두개로 적용 */
  iconPosition?: string;

  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;

  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void; // BlurEvent X

  // 선택된 데이터를 Set 해주는 함수.
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  onSearch?: (
    event?: React.KeyboardEvent<Element> | React.MouseEvent<Element, MouseEvent> | React.FocusEvent<Element> | null | undefined
  ) => void;
};
