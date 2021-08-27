import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.background.default,
    [theme.breakpoints.up("md")]: {
      width: "calc(100% - 320px)",
    },
    boxShadow: theme.shadows[10],
  },
  toolbar: {
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
  },
  title: {
    flexGrow: 1,
    color: theme.palette.text.primary,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));
