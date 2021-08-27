import * as React from "react";

import { Slide, Box } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CloseIcon from "@material-ui/icons/Close";
import ErrorIcon from "@material-ui/icons/Error";
import WarningIcon from "@material-ui/icons/Warning";
import { useSelector } from "react-redux";

import { SnackbarType } from "constants/snackbar-constants";
import { RootState } from "redux/rootReducer";
import { hideSnackbar } from "redux/snackbar.slice";
import { useAppDispatch } from "redux/store";

import { useStyles } from "./SimpleSnackbar.styles";

const snackbarTypeIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: ErrorIcon,
};

const SimpleSnackbar: React.FC = () => {
  const snackbar = useSelector((root: RootState) => root.snackbar);
  const dispatch = useAppDispatch();

  const handleClose = (
    _: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(hideSnackbar({ message: snackbar.message }));
    const timer = setTimeout(() => {
      dispatch(hideSnackbar({ message: null }));
      clearTimeout(timer);
    }, 195);
  };

  const classes = useStyles();

  const contentSnackbarClassName = `${
    snackbar.snackbarType !== SnackbarType.DEFAULT &&
    classes[
      `snackbarContentRoot-${snackbar.snackbarType}` as keyof typeof classes
    ]
  }`;

  const SnackbarIcon =
    snackbar.withIcon &&
    Object.keys(snackbarTypeIcon).includes(snackbar.snackbarType)
      ? snackbarTypeIcon[snackbar.snackbarType as keyof typeof snackbarTypeIcon]
      : null;
  return (
    <Snackbar
      anchorOrigin={snackbar.anchorOrigin}
      open={snackbar.isOpen}
      autoHideDuration={snackbar.autoHideDuration}
      onClose={handleClose}
      message={
        <Box display="flex">
          {SnackbarIcon && <SnackbarIcon className={classes.snackbarIcon} />}
          <Box>
            {typeof snackbar.message === "string"
              ? snackbar.message
              : JSON.stringify(snackbar.message)}
          </Box>
        </Box>
      }
      TransitionComponent={Slide}
      ContentProps={{
        className: contentSnackbarClassName,
      }}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    />
  );
};

export default SimpleSnackbar;
