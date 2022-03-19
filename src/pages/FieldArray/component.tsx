import { Formik, Form } from 'formik';
import { FieldArrayFormik, FieldFormikText } from 'components/formik';

const initialValues = {
  strings: ['', '', 'makson'],
  numbers: [12312, 123, 23],
};

export function FieldArrayPage(): JSX.Element {
  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <Form>
        <FieldArrayFormik name='strings' subComponent={FieldFormikText} />
        <FieldArrayFormik name='numbers' subComponent={FieldFormikText} subProps={{ type: 'number' }} />
      </Form>
    </Formik>
  );
}
