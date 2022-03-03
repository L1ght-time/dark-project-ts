import React from 'react';

import { TSideBarItemAny } from '../types';

import { isNested } from './helpers';
import { NestedItem } from './NestedItem';
import { SingleItem } from './SingleItem';

export function SideBarController(item: TSideBarItemAny): JSX.Element {
  if (isNested(item)) return <NestedItem {...item} />;

  return <SingleItem {...item} />;
}

export default SideBarController;
