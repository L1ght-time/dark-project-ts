export interface SideBarProps {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}

export interface RoutesData {
  label: string;
  link: string;
}

export interface ListItemsData {
  label: string;
  url?: string;
  routes?: RoutesData[];
}
