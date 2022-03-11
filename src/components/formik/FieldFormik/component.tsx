import { TextField, TextFieldProps } from '@mui/material';

export function FieldFormik({
  className,
  label,
  name,
  type = 'text',
  variant = 'outlined',
  autoComplete = 'off',
}: TextFieldProps): JSX.Element {
  return (
    <TextField
      type={type}
      id={name}
      label={label}
      variant={variant}
      autoComplete={autoComplete}
      className={className}
    />
  );
}
