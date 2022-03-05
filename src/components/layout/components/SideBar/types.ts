export interface ISideBarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export interface ISingleItemProps {
  label: string;
  url: string;
  isNested?: boolean;
}

export interface INestedItemProps {
  label: string;
  url?: string;
  routes?: ISingleItemProps[];
}

export type TSideBarItemAny = INestedItemProps | ISingleItemProps;
