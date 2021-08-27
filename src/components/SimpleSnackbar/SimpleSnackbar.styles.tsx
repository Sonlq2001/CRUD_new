import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  snackbarIcon: {
    marginRight: theme.spacing(2.5),
    color: theme.palette.secondary.opacityMid,
  },
  "snackbarContentRoot-transparent": {
    backgroundColor: "transparent",
  },
  "snackbarContentRoot-success": {
    backgroundColor: theme.palette.success.main,
  },
  "snackbarContentRoot-info": {
    backgroundColor: theme.palette.info.main,
  },
  "snackbarContentRoot-error": {
    backgroundColor: theme.palette.error.main,
  },
  "snackbarContentRoot-warning": {
    backgroundColor: theme.palette.warning.main,
  },
}));
