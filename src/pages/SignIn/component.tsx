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
  const classes = useStyles();

  return (
    <Container>
      <form className={classes.form}>
        <IconWrapper className={classes.formLogoWr}>
          <LockOutlined className={classes.formLogo} />
        </IconWrapper>

        <Typography variant='h5' component='h5' className={classes.formTitle}>
          Sign in
        </Typography>

        <div className={classes.formFieldWr}>
          <FieldFormik
            name='email'
            label='Email Address *'
            className={classes.field}
          />
          <FieldFormik
            type='password'
            name='password'
            label='Password *'
            className={classes.field}
          />
        </div>

        <FormControlLabel
          control={<Checkbox name='gilad' color='primary' />}
          label='Remember me'
          className={classes.formCheck}
        />

        <Button variant='contained' color='primary' className={classes.formBtn}>
          SIGN IN
        </Button>

        <div className={classes.formLinksWr}>
          <Link to='/'>Forgot password?</Link>
          <Link to='/sign-up'>Don&#39;t have an account? Sign Up</Link>
        </div>
      </form>
    </Container>
  );
};
