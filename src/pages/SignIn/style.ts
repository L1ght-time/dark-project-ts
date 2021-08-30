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
    marginBottom: '24px',
  },

  formFieldWr: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px 0',
  },

  formCheck: {
    marginTop: '8px',
  },

  formBtn: {
    marginTop: '20px',
  },

  formLinksWr: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '16px',
  },
}));

export default useStyles;
