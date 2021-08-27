import React, { FC } from "react";

import MuiAccordion, {
  AccordionProps as MuiAccordionProps,
} from "@material-ui/core/Accordion";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

export type ShapeTypes = "rounded" | "round" | "straight";

export type AccordionProps = { shape?: ShapeTypes } & Omit<
  MuiAccordionProps,
  keyof ShapeTypes
>;

const useStyles = makeStyles({
  CustomMuiAccordion: {
    "&-rounded": {
      "&:first-child": {
        borderTopLeftRadius: "4px",
        borderTopRightRadius: "4px",
      },
      "&:last-child": {
        borderBottomLeftRadius: "4px",
        borderBottomRightRadius: "4px",
      },
    },
    "&-round": {
      "&:first-child": {
        borderTopLeftRadius: "21px",
        borderTopRightRadius: "21px",
      },
      "&:last-child": {
        borderBottomLeftRadius: "21px",
        borderBottomRightRadius: "21px",
      },
    },
    "&-straight": {
      "&:first-child": {
        borderTopLeftRadius: "0",
        borderTopRightRadius: "0",
      },
      "&:last-child": {
        borderBottomLeftRadius: "0",
        borderBottomRightRadius: "0",
      },
    },
  },
});

const CustomMuiAccordion: FC<AccordionProps> = ({
  children,
  shape,
  className,
  ...props
}) => {
  const classes = useStyles();
  const shapeClassName = `${classes.CustomMuiAccordion}-${shape || "rounded"}`;

  return (
    <MuiAccordion className={clsx(shapeClassName, className)} {...props}>
      {children}
    </MuiAccordion>
  );
};

CustomMuiAccordion.displayName = "CustomMuiAccordion";

export default CustomMuiAccordion;
