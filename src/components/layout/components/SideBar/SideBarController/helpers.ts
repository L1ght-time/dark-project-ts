import { INestedItemProps, TSideBarItemAny } from '../types';

export function isNested(item: TSideBarItemAny): item is INestedItemProps {
  return (item as INestedItemProps).url === undefined;
}
