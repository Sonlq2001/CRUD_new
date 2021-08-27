import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
  link: {
    "&:hover": {
      backgroundColor: theme.palette.primary.opacityMid,
    },
  },
}));
