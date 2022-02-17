import { RoutesData } from '../types';

export interface ListItemProps extends RoutesData {
  isListItemOpen: boolean;
  setListItemOpen: (value: boolean) => void;
}
