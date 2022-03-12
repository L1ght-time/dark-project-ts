import { BaseTextFieldProps } from '@mui/material/TextField/TextField';
import { TextFieldProps } from '@mui/material';

export interface IFieldFormikTextProps extends BaseTextFieldProps {
  field: TextFieldProps;
}
