import { SnackbarOrigin } from "@material-ui/core/Snackbar";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SnackbarType } from "constants/snackbar-constants";

const DEFAULT_AUTO_HIDE_DURATION = 4000;
const DEFAULT_ANCHOR_ORIGIN: SnackbarOrigin = {
  vertical: "bottom",
  horizontal: "center",
};

export type SnackbarProps = {
  snackbarType?: SnackbarType;
  withIcon?: boolean;
  message?: string;
  autoHideDuration?: number;
  anchorOrigin?: SnackbarOrigin;
};

type SnackbarHideProps = {
  message: string | null;
};

type SnackbarState = {
  isOpen: boolean;
  withIcon: boolean;
  snackbarType: SnackbarType;
  message: string | null;
  autoHideDuration?: number;
  anchorOrigin?: SnackbarOrigin;
};

const initialState: SnackbarState = {
  withIcon: false,
  snackbarType: SnackbarType.DEFAULT,
  message: null,
  isOpen: false,
  anchorOrigin: DEFAULT_ANCHOR_ORIGIN,
  autoHideDuration: DEFAULT_AUTO_HIDE_DURATION,
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    displaySnackbar(state, action: PayloadAction<SnackbarProps>) {
      state.withIcon = !!action.payload.withIcon;
      state.snackbarType = action.payload.snackbarType || SnackbarType.DEFAULT;
      state.isOpen = true;
      state.message = action.payload.message || "";
      state.anchorOrigin = action.payload.anchorOrigin || DEFAULT_ANCHOR_ORIGIN;
      state.autoHideDuration =
        action.payload.autoHideDuration || DEFAULT_AUTO_HIDE_DURATION;
    },
    hideSnackbar(state, action: PayloadAction<SnackbarHideProps>) {
      state.isOpen = false;
      state.message = action.payload.message;
    },
  },
});

export const { displaySnackbar, hideSnackbar } = snackbarSlice.actions;

export const snackbarReducer = snackbarSlice.reducer;
