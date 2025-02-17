export type TextAreaType = {
  // testarea에 들어갈 id 값 htmlFor에 연결시키기 위함
  id?: string;

  // testarea에 들어갈 name 값
  name?: string;

  label?: string;

  // testarea value 필수값
  value: string;

  // plcaeholder
  placeholder?: string;

  // readOnly
  readOnly?: boolean;

  // disabled
  disabled?: boolean;

  onKeyPress?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;

  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;

  onPaste?: (event: React.ClipboardEvent<HTMLTextAreaElement>) => void;
  // onChange 필수!
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
};
