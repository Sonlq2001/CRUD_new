import React, { FC } from "react";

import MuiButtonGroup, {
  ButtonGroupProps as MuiButtonGroupProps,
} from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

export type ShapeTypes = "rounded" | "round" | "straight";

export type ButtonGroupProps = { shape?: ShapeTypes } & Omit<
  MuiButtonGroupProps,
  keyof ShapeTypes
>;

const useStyles = makeStyles({
  CustomMuiButtonGroup: {
    "& button": {
      borderRadius: "0px",
    },
    "&-rounded": {
      "&:not([class*='vertical']) button:first-child": {
        borderTopLeftRadius: "4px",
        borderBottomLeftRadius: "4px",
      },
      "&:not([class*='vertical']) button:last-child": {
        borderTopRightRadius: "4px",
        borderBottomRightRadius: "4px",
      },
      "&[class*='vertical'] button:first-child": {
        borderTopLeftRadius: "4px",
        borderTopRightRadius: "4px",
      },
      "&[class*='vertical'] button:last-child": {
        borderBottomLeftRadius: "4px",
        borderBottomRightRadius: "4px",
      },
    },
    "&-round": {
      "&:not([class*='vertical']) button:first-child": {
        borderTopLeftRadius: "21px",
        borderBottomLeftRadius: "21px",
      },
      "&:not([class*='vertical']) button:last-child": {
        borderTopRightRadius: "21px",
        borderBottomRightRadius: "21px",
      },
      "&[class*='vertical'] button:first-child": {
        borderTopLeftRadius: "21px",
        borderTopRightRadius: "21px",
      },
      "&[class*='vertical'] button:last-child": {
        borderBottomLeftRadius: "21px",
        borderBottomRightRadius: "21px",
      },
    },
    "&-straight": {
      "&:not([class*='vertical']) button:first-child": {
        borderTopLeftRadius: "0",
        borderBottomLeftRadius: "0",
      },
      "&:not([class*='vertical']) button:last-child": {
        borderTopRightRadius: "0",
        borderBottomRightRadius: "0",
      },
      "&[class*='vertical'] button:first-child": {
        borderTopLeftRadius: "0",
        borderTopRightRadius: "0",
      },
      "&[class*='vertical'] button:last-child": {
        borderBottomLeftRadius: "0",
        borderBottomRightRadius: "0",
      },
    },
  },
});

const CustomMuiButtonGroup: FC<ButtonGroupProps> = ({
  children,
  shape,
  className,
  ...props
}) => {
  const classes = useStyles();
  const shapeClassName = `${classes.CustomMuiButtonGroup} ${
    classes.CustomMuiButtonGroup
  }-${shape || "rounded"}`;

  return (
    <MuiButtonGroup className={clsx(shapeClassName, className)} {...props}>
      {children}
    </MuiButtonGroup>
  );
};

CustomMuiButtonGroup.displayName = "CustomMuiButtonGroup";

export default CustomMuiButtonGroup;
