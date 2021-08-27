import * as React from "react";

import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  FormControlLabelProps,
} from "@material-ui/core";
import { RadioGroupProps } from "@material-ui/core/RadioGroup";
import { Field, useFormikContext } from "formik";
import { RadioGroup } from "formik-material-ui";
import get from "lodash.get";

import { InputProps } from "types/form.types";

import { useStyles } from "./FormikRadioGroup.styles";

type RadioValue = string | number;

type RadioOption = {
  label: React.ReactNode;
  value: RadioValue;
  disabled?: boolean;
  inputProps?: InputProps;
};

type FormikRadioGroupProps = Omit<RadioGroupProps, "name" | "color"> & {
  options: RadioOption[];
  name: string;
  helperText?: string;
  isSubmitting?: boolean;
  label?: string;
  fullWidth?: boolean;
  noLabel?: boolean;
  color?: "primary" | "secondary" | "default";
  size?: "small" | "medium";
  FormLabelControlProps?: Omit<
    FormControlLabelProps,
    "value" | "control" | "label" | "disabled"
  >;
};

const FormikRadioGroup: React.FC<FormikRadioGroupProps> = ({
  name,
  options,
  helperText,
  isSubmitting,
  label,
  fullWidth,
  noLabel,
  color,
  size,
  FormLabelControlProps,
  ...rest
}) => {
  const classes = useStyles();
  const { errors } = useFormikContext<never>();
  const errorMessage = get(errors, name);
  return (
    <FormControl
      fullWidth={fullWidth}
      component="fieldset"
      error={!!errorMessage}
      className={classes.root}
    >
      {!noLabel && <FormLabel component="legend">{label ?? name}</FormLabel>}
      <Field component={RadioGroup} name={name} {...rest}>
        {options.map(option => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={
              <Radio
                disabled={isSubmitting || option.disabled}
                color={color}
                size={size}
                inputProps={option.inputProps}
              />
            }
            label={option.label}
            disabled={isSubmitting}
            className={classes.radioGroup}
            {...FormLabelControlProps}
          />
        ))}
      </Field>
      <FormHelperText>{helperText || errorMessage}</FormHelperText>
    </FormControl>
  );
};

export default FormikRadioGroup;
