import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  container: {
    width: "100vw",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: theme.palette.background.secondary,
  },
  content: {
    flex: 1,
    marginTop: theme.spacing(7),
  },
  root: {
    background: theme.palette.background.default,
    boxShadow: theme.shadows[10],
  },
  toolbar: {
    [theme.breakpoints.up("md")]: {
      minHeight: 56,
    },
  },
  title: {
    flexGrow: 1,
    color: theme.palette.text.primary,
  },
}));
