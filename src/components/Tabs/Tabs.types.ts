export type TabsType = {
  /* status 이름 필수 */
  items: item[];

  height?: string;

  type?: string;

  isVertical?: boolean;

  defaultIndex: number;

  selectedIndex: number;

  onChange: (index: number) => void;

  panelsMarginOn?: boolean;
};

type item = {
  key: number;
  label: string;
  childrenNode: React.ReactNode;
  icon?: React.ReactNode;
};
