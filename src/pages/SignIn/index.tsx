import React, { FC } from 'react';
import useStyles from './style';
import FieldFormik from '../../components/formik/FieldFormik';

const SignIn: FC = () => {
  const styles = useStyles();
  return (
    <form className={styles.root}>
      <FieldFormik name="email" label="Email address" />
      <FieldFormik name="password" type="password" label="Password" />
    </form>
  );
};

export default SignIn;
