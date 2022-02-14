import React from 'react';
import { Box, List, ListItem } from '@mui/material';

import Link from '../../components/shared/Link';
import { AuthRoutes, FormikRoutes } from '../../constants';

export function Formik(): JSX.Element {
  return (
    <Box sx={{ width: '100%', maxWidth: 360 }}>
      <nav aria-label='secondary mailbox folders'>
        <List>
          <ListItem disablePadding>
            <Link to={`/${AuthRoutes.RoutePathFormik}/${FormikRoutes.RouteField}`}>Field</Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to={`/${AuthRoutes.RoutePathFormik}/${FormikRoutes.RouteFieldArray}`}>Field Array</Link>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
