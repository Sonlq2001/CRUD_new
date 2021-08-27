import * as React from "react";

import { Box, BoxProps, makeStyles } from "@material-ui/core";
import { TextFieldProps } from "@material-ui/core/TextField";
import clsx from "clsx";
import { Field, useFormikContext } from "formik";
import { TextField } from "formik-material-ui";
import get from "lodash.get";

import { ShapeTypes } from "types/shape.types";

import CustomMuiTypography, {
  TypographyProps,
} from "styles/themes/components/CustomMuiTypography";

export type FormikTextFieldProps = Omit<TextFieldProps, "name"> & {
  shape?: ShapeTypes;
  name: string;
  helperText?: string;
  customLabel?: string | React.ReactNode;
  customLabelProps?: TypographyProps;
  customLabelSpacingProps?: BoxProps;
  isTrimValueOnBlur?: boolean;
};

const useStyles = makeStyles(() => ({
  customMuiTextField: {
    "&-round": {
      "& [class*='MuiInputBase-root']": {
        borderRadius: "12px",
      },
    },
    "&-rounded": {
      "& [class*='MuiInputBase-root']": {
        borderRadius: "4px",
      },
    },
    "&-straight": {
      "& [class*='MuiInputBase-root']": {
        borderRadius: "0px",
      },
    },
  },
}));

const FormikTextField: React.FC<FormikTextFieldProps> = ({
  shape,
  className,
  name,
  id,
  customLabel,
  customLabelProps,
  customLabelSpacingProps,
  isTrimValueOnBlur,
  ...rest
}) => {
  const classes = useStyles();

  const shapeClassName = `${classes.customMuiTextField}-${shape || "rounded"}`;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { values, setFieldValue, handleBlur } = useFormikContext<any>();

  const handleTrimOnBlur = (e: React.FocusEvent<unknown>) => {
    handleBlur(e);
    setFieldValue(name, get(values, name).trim());
  };

  return (
    <>
      {customLabel && (
        <CustomMuiTypography
          variant="subtitle2"
          color="textSecondary"
          {...customLabelProps}
        >
          <Box mb={1} {...customLabelSpacingProps}>
            {id ? <label htmlFor={id}>{customLabel}</label> : customLabel}
          </Box>
        </CustomMuiTypography>
      )}
      <Field
        component={TextField}
        name={name}
        onBlur={isTrimValueOnBlur && handleTrimOnBlur}
        {...rest}
        className={clsx(shapeClassName, className)}
      />
    </>
  );
};

export default React.memo(FormikTextField);
