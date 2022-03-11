import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { BaseTextFieldProps } from '@mui/material/TextField/TextField';

interface IFieldFormikTextProps extends BaseTextFieldProps {
  field: TextFieldProps;
}

export function FieldFormikText({ field, ...props }: IFieldFormikTextProps): JSX.Element {
  return <TextField {...props} {...field} />;
}
