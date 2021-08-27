import React, { FC } from "react";

import MuiChip, { ChipProps as MuiChipProps } from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import get from "lodash.get";

export type ShapeTypes = "rounded" | "round" | "straight";

export type ChipProps = {
  customColor?: string;
} & MuiChipProps;

const CustomMuiChip: FC<ChipProps> = ({ customColor, className, ...props }) => {
  const classes = makeStyles(theme => ({
    customColorChip: {
      backgroundColor: customColor
        ? get(theme.palette, customColor) || customColor
        : "transparent",
    },
  }))();

  return (
    <MuiChip
      className={clsx(className, customColor && classes.customColorChip)}
      {...props}
    />
  );
};

CustomMuiChip.displayName = "CustomMuiChip";

export default CustomMuiChip;
