import React from 'react';

import { TFieldFormikTextProps } from '../FieldFormikText/types';

export type TFieldArrayFormik = {
  name: string;
  subComponent: React.ReactNode;
  label?: string;
  subProps?: Partial<TFieldFormikTextProps>;
};
