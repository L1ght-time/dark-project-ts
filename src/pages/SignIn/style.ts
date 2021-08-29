import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '400px',
  },

  formLogoWr: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    minWidth: '40px',
    height: '40px',
    margin: '30px auto 10px auto',
  },

  formLogo: {
    color: '#fff',
  },
}));

export default useStyles;
