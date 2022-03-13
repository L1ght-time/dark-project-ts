import React from 'react';
import { Form, Formik, Field } from 'formik';
import { FieldFormikText } from 'components/formik';
import { Box, InputAdornment, MenuItem, Stack, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

import { DisplayFormikStateData } from '../../components/shared/DisplayFormikStateData/component';

import { currencies } from './mocks';
import { FIELD_PAGE_INITIAL_DATA } from './constants';

export function FieldPage(): JSX.Element {
  return (
    <Formik initialValues={FIELD_PAGE_INITIAL_DATA} onSubmit={() => {}}>
      {({ values }) => (
        <Form>
          <Stack direction='row' spacing={4} justifyContent='center'>
            <Box>
              <Typography pb={2}>Text type</Typography>
              <Field name='text' label='Text' component={FieldFormikText} />
            </Box>
            <Box>
              <Typography pb={2}>Field with icon</Typography>
              <Field
                name='textWidthIcon'
                label='Text with icon'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                component={FieldFormikText}
              />
            </Box>
            <Box>
              <Typography pb={2}>Outlined field</Typography>
              <Field type='number' name='number' label='Outlined' component={FieldFormikText} />
            </Box>
            <Box>
              <Typography pb={2}>Select field</Typography>
              <Field name='select' label='Select' select value={values} component={FieldFormikText}>
                {currencies.map(({ value, label }) => (
                  <MenuItem key={value} value={value}>
                    {label}
                  </MenuItem>
                ))}
              </Field>
            </Box>
          </Stack>
          <DisplayFormikStateData values={values} />
        </Form>
      )}
    </Formik>
  );
}
