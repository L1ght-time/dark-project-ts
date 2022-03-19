import { Field, FieldArray } from 'formik';
import { Box, Button } from '@mui/material';
import { DisplayFormikStateData } from 'components/shared/DisplayFormikStateData/component';

import { useStyles } from './styles';
import { TFieldArrayFormik } from './types';

export function FieldArrayFormik({ subComponent, subProps, name }: TFieldArrayFormik): JSX.Element {
  const classes = useStyles();

  return (
    <FieldArray name={name}>
      {({ form, push, remove }) => (
        <>
          <Box className={classes.formContentWr}>
            {form.values[name]?.map((friend: string, index: number) => (
              // eslint-disable-next-line react/no-array-index-key
              <Box key={index} className={classes.fieldWr}>
                <Field name={`${name}.${index}`} component={subComponent} {...subProps} />
                <Button variant='contained' onClick={() => remove(index)}>
                  -
                </Button>
              </Box>
            ))}
            <Button variant='contained' onClick={() => push('')}>
              +
            </Button>
          </Box>
          <DisplayFormikStateData values={form.values[name]} />
        </>
      )}
    </FieldArray>
  );
}
