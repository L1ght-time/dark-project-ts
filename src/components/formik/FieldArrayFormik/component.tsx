import { Field, FieldArray } from 'formik';
import { Box, Button, Stack, Typography } from '@mui/material';

import { useStyles } from './styles';
import { TFieldArrayFormik } from './types';

export function FieldArrayFormik({ subComponent, subProps, name, label }: TFieldArrayFormik): JSX.Element {
  const classes = useStyles();

  return (
    <FieldArray name={name}>
      {({ form, push, remove }) => (
        <Box className={classes.formContentWr}>
          <Typography>{label}</Typography>
          <Stack spacing={3}>
            {form.values[name]?.map((friend: string, index: number) => (
              // eslint-disable-next-line react/no-array-index-key
              <Box key={index} className={classes.fieldWr}>
                <Field name={`${name}.${index}`} component={subComponent} {...subProps} />
                <Button variant='contained' onClick={() => remove(index)}>
                  -
                </Button>
              </Box>
            ))}
          </Stack>
          <Button variant='contained' onClick={() => push('')}>
            +
          </Button>
        </Box>
      )}
    </FieldArray>
  );
}
