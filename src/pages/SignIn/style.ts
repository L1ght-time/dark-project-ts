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
    color: theme.palette.white.main,
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

  field: {
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
    },

    '& .Mui-focused': {
      color: theme.palette.primary.main,
    },
  },

  formCheck: {
    marginTop: theme.spacing(1),

    '& .MuiCheckbox-root.Mui-checked': {
      color: theme.palette.primary.main,
    },
  },

  formBtn: {
    marginTop: theme.spacing(2.5),
    backgroundColor: theme.palette.primary.main,

    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },

  formLinksWr: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),

    '& .MuiLink-root': {
      color: theme.palette.primary.main,
      textDecorationColor: theme.palette.primary.main,
    },
  },
}));

export default useStyles;
