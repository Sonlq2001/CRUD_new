import React, { FC } from "react";

import MuiBox, { BoxProps as MuiBoxProps } from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

export type AnimationTypes = "pulse" | "wave" | "none";
export type VariantTypes = "text" | "circle" | "rect";

export type SkeletonProps = {
  variant?: VariantTypes;
  animation?: AnimationTypes;
} & Omit<MuiBoxProps, VariantTypes | AnimationTypes>;

const useStyles = makeStyles(theme => ({
  CustomMuiSkeleton: {
    "&-pulse": {
      animation: `$pulse 1.5s ${theme.transitions.easing.easeInOut} 0.5s infinite`,
    },
    "&-wave": {
      overflow: "hidden",
      position: "relative",
      "&::after": {
        position: "absolute",
        content: "''",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        background: `linear-gradient(90deg, transparent, ${theme.palette.action.hover}, transparent)`,
        animation: `$waves 1.6s linear 0.5s infinite`,
      },
    },
    "&-text": {
      borderRadius: "4px",
    },
    "&-rect": {
      borderRadius: "0px",
    },
    "&-circle": {
      borderRadius: "50%",
    },
  },
  "@keyframes waves": {
    "0%": {
      transform: "translateX(-100%)",
    },
    "60%": {
      transform: "translateX(100%)",
    },
    "100%": {
      transform: "translateX(100%)",
    },
  },
  "@keyframes pulse": {
    "0%": {
      opacity: 1,
    },
    "50%": {
      opacity: 0.4,
    },
    "100%": {
      opacity: 1,
    },
  },
}));

const CustomMuiSkeleton: FC<SkeletonProps> = ({
  children,
  animation = "pulse",
  variant = "text",
  className,
  ...props
}) => {
  const classes = useStyles();
  const animationClassName = `${classes.CustomMuiSkeleton}-${animation}`;
  const variantClassName = `${classes.CustomMuiSkeleton}-${variant}`;

  return (
    <MuiBox
      minHeight="12px"
      bgcolor="action.hover"
      className={clsx(animationClassName, variantClassName, className)}
      {...props}
    >
      {children}
    </MuiBox>
  );
};

CustomMuiSkeleton.displayName = "CustomMuiSkeleton";

export default CustomMuiSkeleton;
