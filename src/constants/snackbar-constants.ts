import { SnackbarOrigin } from "@material-ui/core";

export const DEFAULT_AUTO_HIDE_DURATION = 4000;
export const DEFAULT_ANCHOR_ORIGIN: SnackbarOrigin = {
  vertical: "bottom",
  horizontal: "left",
};

export enum SnackbarType {
  DEFAULT = "default",
  TRANSPARENT = "transparent",
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
}
