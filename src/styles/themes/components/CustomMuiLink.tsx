import React, { FC } from "react";

import { makeStyles } from "@material-ui/core";
import Link, { LinkProps as MuiLinkProps } from "@material-ui/core/Link";
import clsx from "clsx";
import { TextTransformProperty } from "csstype";
import {
  Link as ReactRouterDomLink,
  LinkProps as RouterDomLinkProps,
} from "react-router-dom";

import { FontFamilyWithTypes } from "../theme-constants";

type FontWeightTypes =
  | "fontWeightLight"
  | "fontWeightRegular"
  | "fontWeightMedium"
  | "fontWeightBold"
  | number;

export type LinkProps = {
  fontFamily?: keyof typeof FontFamilyWithTypes;
  fontWeight?: FontWeightTypes;
  textTransform?: TextTransformProperty;
  withFixedColor?: boolean;
  ReactRouterDomLinkProps?: RouterDomLinkProps;
} & Omit<
  MuiLinkProps,
  keyof typeof FontFamilyWithTypes | keyof FontWeightTypes
>;

const CustomMuiLink: FC<LinkProps> = ({
  fontFamily,
  fontWeight,
  className,
  textTransform,
  withFixedColor,
  ReactRouterDomLinkProps,
  ...props
}) => {
  const classes = makeStyles(theme => ({
    CustomMuiLink: {
      fontFamily: fontFamily
        ? `${fontFamily}, ${FontFamilyWithTypes[fontFamily]}`
        : undefined,
      fontWeight:
        typeof fontWeight === "string"
          ? theme.typography[fontWeight]
          : fontWeight,
      textTransform,
    },
  }))();

  const fixedColorLinkStyles = makeStyles(theme => ({
    FixedColorLink: {
      cursor: "pointer",
      color: `${theme.palette.info.main} !important`,
      "&:visited": {
        color: `${theme.palette.primary.main} !important`,
      },
    },
  }))();

  return ReactRouterDomLinkProps ? (
    <Link
      className={clsx(
        classes.CustomMuiLink,
        className,
        withFixedColor && fixedColorLinkStyles.FixedColorLink
      )}
      component={ReactRouterDomLink}
      to={ReactRouterDomLinkProps.to}
      replace={ReactRouterDomLinkProps.replace}
      {...props}
    />
  ) : (
    <Link
      className={clsx(
        classes.CustomMuiLink,
        className,
        withFixedColor && fixedColorLinkStyles.FixedColorLink
      )}
      {...props}
    />
  );
};

CustomMuiLink.displayName = "CustomMuiLink";

export default CustomMuiLink;
