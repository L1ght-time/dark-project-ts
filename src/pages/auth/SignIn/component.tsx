import React from 'react';
import { LockOutlined } from '@mui/icons-material';
import { Box, Button, Checkbox, Container, FormControlLabel, Typography } from '@mui/material';

import FieldFormik from '../../../components/formik/FieldFormik';
import { IconWrapper } from '../../../components/shared/IconWraper';
import Link from '../../../components/shared/Link';

import useStyles from './style';

export function SignIn() {
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

        <Box className={classes.formFieldWr}>
          <FieldFormik name='email' label='Email Address *' className={classes.field} />
          <FieldFormik type='password' name='password' label='Password *' className={classes.field} />
        </Box>

        <FormControlLabel
          control={<Checkbox name='gilad' color='primary' />}
          label='Remember me'
          className={classes.formCheck}
        />

        <Button variant='contained' color='primary' className={classes.formBtn}>
          SIGN IN
        </Button>

        <Box className={classes.formLinksWr}>
          <Link to='/'>Forgot password?</Link>
          <Link to='/sign-up'>Don&#39;t have an account? Sign Up</Link>
        </Box>
      </form>
    </Container>
  );
}
