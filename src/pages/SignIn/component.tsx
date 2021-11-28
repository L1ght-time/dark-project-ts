import React, { FC } from 'react';
import { LockOutlined } from '@mui/icons-material';
import {
  Checkbox,
  FormControlLabel,
  Typography,
  Button,
  Container,
} from '@mui/material';

import useStyles from './style';
import FieldFormik from '../../components/formik/FieldFormik';
import IconWrapper from '../../components/shared/IconWraper';
import Link from '../../components/shared/Link';

export const SignIn: FC = () => {
  const styles = useStyles();

  return (
    <Container>
      <form className={styles.form}>
        <IconWrapper className={styles.formLogoWr}>
          <LockOutlined className={styles.formLogo} />
        </IconWrapper>

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
