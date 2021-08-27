import React, { FC } from "react";

import { makeStyles } from "@material-ui/core";
import Typography, {
  TypographyProps as MuiTypographyProps,
} from "@material-ui/core/Typography";
import clsx from "clsx";
import { TextTransformProperty } from "csstype";
import get from "lodash.get";

import { FontFamilyWithTypes } from "../theme-constants";

type FontWeightTypes =
  | "fontWeightLight"
  | "fontWeightRegular"
  | "fontWeightMedium"
  | "fontWeightBold"
  | number;

export type TypographyProps = {
  fontFamily?: keyof typeof FontFamilyWithTypes;
  fontWeight?: FontWeightTypes;
  textTransform?: TextTransformProperty;
  fontSize?: number | string;
  customColor?: string;
} & Omit<
  MuiTypographyProps,
  keyof typeof FontFamilyWithTypes | keyof FontWeightTypes
>;

const CustomMuiTypography: FC<TypographyProps> = ({
  fontFamily,
  fontWeight,
  className,
  textTransform,
  fontSize,
  customColor,
  ...props
}) => {
  const classes = makeStyles(theme => ({
    CustomMuiTypography: {
      fontFamily: fontFamily ? `${FontFamilyWithTypes[fontFamily]}` : undefined,
      fontWeight:
        typeof fontWeight === "string"
          ? theme.typography[fontWeight]
          : fontWeight,
      textTransform,
      fontSize: typeof fontSize === "number" ? `${fontSize}px` : fontSize,
    },
    customColorTypography: {
      color: customColor
        ? get(theme.palette, customColor) || customColor
        : "transparent",
    },
  }))();

  return (
    <Typography
      className={clsx(
        classes.CustomMuiTypography,
        className,
        customColor && classes.customColorTypography
      )}
      {...props}
    />
  );
};

CustomMuiTypography.displayName = "CustomMuiTypography";

export default CustomMuiTypography;
