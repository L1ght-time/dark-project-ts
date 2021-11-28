import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 400,
    margin: theme.spacing(8, 'auto', 0, 'auto'),
  },

  formLogoWr: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    width: 40,
    minWidth: 40,
    height: 40,
    margin: theme.spacing(0, 'auto', 1.25, 'auto'),
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
    backgroundColor: theme.palette.primary.main,
  },

  formLinksWr: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
