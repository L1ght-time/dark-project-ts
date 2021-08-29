import React, { FC } from 'react';
import clsx from 'clsx';
import { LockOutlined } from '@material-ui/icons';
import { Typography } from '@material-ui/core';

import useStyles from './style';
import FieldFormik from '../../components/formik/FieldFormik';
import IconWraper from '../../components/shared/IconWraper';

const SignIn: FC = () => {
  const styles = useStyles();
  return (
    <form
      className={clsx('d-flex flex-column mt-5 ms-auto me-auto', styles.form)}
    >
      <IconWraper
        className={clsx('rounded-circle', styles.formLogoWr)}
        bg='rgb(220, 0, 78)'
      >
        <LockOutlined className={styles.formLogo} />
      </IconWraper>

      <Typography variant='h5' component='p' className='text-center mb-4'>
        Sign in
      </Typography>

      <FieldFormik name='email' label='Email Address *' />
      <FieldFormik type='password' name='password' label='Password *' />
    </form>
  );
};

export default SignIn;
