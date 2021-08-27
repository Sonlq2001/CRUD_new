import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up("md")]: {
      width: 320,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: 320,
    background: theme.palette.primary.dark,
    boxShadow: theme.shadows[16],
  },
}));
