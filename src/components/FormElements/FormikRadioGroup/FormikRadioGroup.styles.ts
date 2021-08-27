import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(1.375),
  },
  radioGroup: {
    "& .MuiRadio-root.Mui-checked": {
      color: theme.palette.primary.dark,
    },
  },
}));
