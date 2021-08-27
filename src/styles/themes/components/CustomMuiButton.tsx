import React, { FC } from "react";

import { Box, CircularProgress } from "@material-ui/core";
import MuiButton, {
  ButtonProps as MuiButtonProps,
} from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import merge from "lodash.merge";

export type ShapeTypes = "rounded" | "round" | "straight";

export type ButtonProps = {
  isLoadingButton?: boolean;
  LoadingComponent?: React.ReactNode;
  shape?: ShapeTypes;
  disabledWithOpacity?: boolean;
} & Omit<MuiButtonProps, keyof ShapeTypes>;

const useStyles = makeStyles({
  CustomMuiButton: {
    "&-rounded": {
      borderRadius: "4px",
    },
    "&-round": {
      borderRadius: "21px",
    },
    "&-straight": {
      borderRadius: "0",
    },
  },
});

const CustomMuiButton: FC<ButtonProps> = ({
  children,
  shape,
  color,
  disabledWithOpacity,
  disabled,
  className,
  isLoadingButton,
  LoadingComponent,
  ...props
}) => {
  const classes = useStyles();
  const theme = useTheme();

  const shapeClassName = `${classes.CustomMuiButton}-${shape}`;

  const disabledWithOpacityProps: ButtonProps = {};

  if (
    (color === "primary" || color === "secondary") &&
    disabledWithOpacity &&
    disabled
  ) {
    disabledWithOpacityProps.style = {
      backgroundColor: theme.palette[color].opacityMid,
      color: theme.palette[color].contrastText,
    };
  }

  return (
    <MuiButton
      className={clsx(shapeClassName, className)}
      color={color}
      disabled={isLoadingButton || disabled}
      {...merge(props, disabledWithOpacityProps)}
    >
      {isLoadingButton &&
        (LoadingComponent || (
          <Box
            position="absolute"
            top={0}
            left={0}
            bottom={0}
            right={0}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <CircularProgress size={20} />
          </Box>
        ))}
      {children}
    </MuiButton>
  );
};

CustomMuiButton.displayName = "CustomMuiButton";

export default CustomMuiButton;
