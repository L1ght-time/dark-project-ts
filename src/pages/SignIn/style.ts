import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    margin: '64px auto 0 auto',
  },

  formLogoWr: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    minWidth: '40px',
    height: '40px',
    margin: '0 auto 10px auto',
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
    gap: '24px 0',
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
