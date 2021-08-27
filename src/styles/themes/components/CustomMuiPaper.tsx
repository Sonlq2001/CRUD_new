import React, { FC } from "react";

import MuiPaper, { PaperProps as MuiPaperProps } from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

export type ShapeTypes = "rounded" | "round" | "straight";

export type PaperProps = { shape?: ShapeTypes; filled?: boolean } & Omit<
  MuiPaperProps,
  keyof ShapeTypes
>;

const useStyles = makeStyles(theme => ({
  CustomMuiPaper: {
    "&-rounded": {
      borderRadius: "4px",
    },
    "&-round": {
      borderRadius: "16px",
    },
    "&-straight": {
      borderRadius: "0",
    },
    "&-filled": {
      border: "none",
      backgroundColor: theme.palette.background.secondary,
    },
  },
}));

const CustomMuiPaper: FC<PaperProps> = ({
  children,
  shape,
  filled = false,
  className,
  ...props
}) => {
  const classes = useStyles();
  const shapeClassName = `${classes.CustomMuiPaper}-${shape || "rounded"} ${
    filled ? `${classes.CustomMuiPaper}-filled` : ""
  }`;

  return (
    <MuiPaper className={clsx(shapeClassName, className)} {...props}>
      {children}
    </MuiPaper>
  );
};

CustomMuiPaper.displayName = "CustomMuiPaper";

export default CustomMuiPaper;
