import { Field, Form, FormikValues } from 'formik';
import { Box, Button } from '@mui/material';

import { FieldFormikText } from '../FieldFormikText';
import { DisplayFormikStateData } from '../../shared/DisplayFormikStateData/component';

import { useStyles } from './styles';

interface IField {
  name: string;
}

export function FieldArrayFormik({ form, push, remove, insert }: FormikValues): JSX.Element {
  const classes = useStyles();
  return (
    <>
      <Form>
        <Box className={classes.formContentWr}>
          {form.values.friends?.length ? (
            form.values.friends.map((friend: IField, index: number) => (
              // eslint-disable-next-line react/no-array-index-key
              <Box key={index} className={classes.fieldWr}>
                <Field name={`friends.${index}.name`} component={FieldFormikText} />
                <Button variant='contained' className={classes.button} onClick={() => remove(index)}>
                  -
                </Button>
                <Button variant='contained' className={classes.button} onClick={() => insert(index, '')}>
                  +
                </Button>
              </Box>
            ))
          ) : (
            <Button variant='contained' className={classes.button} onClick={() => push('')}>
              Add a friend
            </Button>
          )}
        </Box>
      </Form>
      <DisplayFormikStateData values={form.values.friends} />
    </>
  );
}
