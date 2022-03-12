import React from 'react';
import { Form, Formik, Field } from 'formik';
import { FieldFormikText } from 'components/formik';
import { Box, MenuItem, Stack, Typography } from '@mui/material';

import { currencies } from './mock';

export function FieldPage(): JSX.Element {
  return (
    <Formik
      initialValues={{
        text: '',
        number: '',
        select: currencies[0].value,
      }}
      onSubmit={() => {}}
    >
      {({ values }) => (
        <Form>
          <Stack direction='row' spacing={4} justifyContent='center'>
            <Box>
              <Typography pb={2}>Text Type</Typography>
              <Field name='text' label='Text' component={FieldFormikText} />
            </Box>
            <Box>
              <Typography pb={2}>Outlined Field</Typography>
              <Field type='number' name='number' label='Outlined' component={FieldFormikText} />
            </Box>
            <Box>
              <Typography pb={2}>Select field</Typography>
              <Field name='select' label='Select' select value={values} component={FieldFormikText}>
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Field>
            </Box>
          </Stack>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
}
