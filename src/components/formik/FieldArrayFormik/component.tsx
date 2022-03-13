import { Field, Form, FormikValues } from 'formik';
import { Box, Button } from '@mui/material';

export function FieldArrayFormik({ form, push, remove, insert }: FormikValues): JSX.Element {
  return (
    <Form>
      {form.values.friends && form.values.friends.length > 0 ? (
        form.values.friends.map((friend: string, index: number) => (
          // eslint-disable-next-line react/no-array-index-key
          <Box key={index}>
            <Field name={`friends.${index}`} />
            <Button onClick={() => remove(index)}>-</Button>
            <Button onClick={() => insert(index, '')}>+</Button>
          </Box>
        ))
      ) : (
        <Button onClick={() => push('')}>Add a friend</Button>
      )}
    </Form>
  );
}
