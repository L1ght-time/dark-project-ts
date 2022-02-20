export interface HeaderDrawerProps {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}

export interface RoutesData {
  label: string;
  link: string;
}

export interface ListItemsData {
  label: string;
  routes: RoutesData[];
}
