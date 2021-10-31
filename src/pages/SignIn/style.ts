import { makeStyles } from '@material-ui/core/styles';

import pxToRem from '../../helpers/pxToRem';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    maxWidth: pxToRem(400),
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(8, 'auto', 0, 'auto'),
  },

  formLogoWr: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: pxToRem(40),
    minWidth: pxToRem(40),
    height: pxToRem(40),
    margin: theme.spacing(0, 'auto', 1.25, 'auto'),
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
  },

  formLogo: {
    color: '#fff',
  },

  formTitle: {
    textAlign: 'center',
    marginBottom: theme.spacing(3),
  },

  formFieldWr: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3, 0),
  },

  formCheck: {
    marginTop: theme.spacing(1),
  },

  formBtn: {
    marginTop: theme.spacing(2.5),
  },

  formLinksWr: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
