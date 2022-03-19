import { Formik, Form } from 'formik';
import { FieldArrayFormik, FieldFormikText } from 'components/formik';
import { Stack } from '@mui/material';
import { DisplayFormikStateData } from 'components/shared/DisplayFormikStateData';

const initialValues = {
  strings: ['', '', 'makson'],
  numbers: [12312, '', 23],
};

export function FieldArrayPage(): JSX.Element {
  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      {({ values }) => (
        <Form>
          <Stack justifyContent='center' spacing={2} direction='row'>
            <FieldArrayFormik
              label='String values'
              name='strings'
              subComponent={FieldFormikText}
              subProps={{ label: 'Set string:' }}
            />
            <FieldArrayFormik
              label='Numbers values'
              name='numbers'
              subComponent={FieldFormikText}
              subProps={{ type: 'number', label: 'Set number:' }}
            />
          </Stack>
          <hr />
          <DisplayFormikStateData values={values} />
        </Form>
      )}
    </Formik>
  );
}
