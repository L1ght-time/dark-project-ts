import { FieldArray, Formik } from 'formik';

import { FieldArrayFormik } from '../../components/formik';

export function FieldArrayPage(): JSX.Element {
  return (
    <Formik
      initialValues={{ friends: ['jared', 'ian', 'brent'] }}
      onSubmit={() => {}}
      render={() => <FieldArray name='friends' component={FieldArrayFormik} />}
    />
  );
}
