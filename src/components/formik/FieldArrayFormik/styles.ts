import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  formContentWr: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 5,
  },
  fieldWr: {
    width: 'fit-content',
    display: 'flex',
    gap: 5,
  },
}));
