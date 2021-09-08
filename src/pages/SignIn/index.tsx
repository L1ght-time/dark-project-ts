import React, { FC } from 'react';
import { LockOutlined } from '@material-ui/icons';
import {
  Checkbox,
  FormControlLabel,
  Typography,
  Button,
  Container,
} from '@material-ui/core';

import useStyles from './style';
import FieldFormik from '../../components/formik/FieldFormik';
import IconWraper from '../../components/shared/IconWraper';
import Link from '../../components/shared/Link';

const SignIn: FC = () => {
  const styles = useStyles();

  return (
    <Container>
      <form className={styles.form}>
        <IconWraper className={styles.formLogoWr}>
          <LockOutlined className={styles.formLogo} />
        </IconWraper>

        <Typography variant='h5' component='h5' className={styles.formTitle}>
          Sign in
        </Typography>

        <div className={styles.formFieldWr}>
          <FieldFormik name='email' label='Email Address *' />
          <FieldFormik type='password' name='password' label='Password *' />
        </div>

        <FormControlLabel
          control={<Checkbox name='gilad' color='primary' />}
          label='Remember me'
          className={styles.formCheck}
        />

        <Button variant='contained' color='primary' className={styles.formBtn}>
          SIGN IN
        </Button>

        <div className={styles.formLinksWr}>
          <Link to='/'>Forgot password?</Link>
          <Link to='/sign-up'>Don&#39;t have an account? Sign Up</Link>
        </div>
      </form>
    </Container>
  );
};

export default SignIn;
