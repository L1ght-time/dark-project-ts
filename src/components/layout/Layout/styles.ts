import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
  mainContentWr: {
    marginTop: 84,
    marginLeft: 20,
    transition: theme.transitions.create(['margin-left'], { duration: theme.transitions.duration.short }),
  },

  contentWithSideBar: {
    marginLeft: 270,
    transition: theme.transitions.create(['margin-left'], { duration: theme.transitions.duration.leavingScreen }),
  },
}));
