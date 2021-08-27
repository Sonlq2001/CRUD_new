import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  wrapperTextField: {
    "& .MuiInputBase-root": {
      backgroundColor: theme.palette.grey[100],
      color: theme.palette.text.primary,
      fontSize: "16px",
    },
  },
}));
