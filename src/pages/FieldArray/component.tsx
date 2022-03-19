import { FieldArray, Formik } from 'formik';

import { FieldArrayFormik } from '../../components/formik';

const initialValues = {
  friends: [{ name: '' }, { name: '' }, { name: '' }],
};

export function FieldArrayPage(): JSX.Element {
  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <FieldArray name='friends' component={FieldArrayFormik} />
    </Formik>
  );
}
