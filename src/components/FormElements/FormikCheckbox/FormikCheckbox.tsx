import * as React from "react";

import { FormGroup } from "@material-ui/core";
import { CheckboxProps } from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import { Field, useFormikContext } from "formik";
import { CheckboxWithLabel } from "formik-material-ui";

import { InputProps } from "types/form.types";

type CheckboxValue = string | number;

type CheckboxOption = {
  label: React.ReactNode;
  value: CheckboxValue;
  inputProps?: InputProps;
};

type FormikCheckboxProps = Omit<
  CheckboxProps,
  "name" | "color" | "inputProps"
> & {
  name: string;
  helperText?: string;
  label?: string;
  noLabel?: boolean;
  options: CheckboxOption[];
  fullWidth?: boolean;
  row?: boolean;
  color?: "primary" | "secondary" | "default";
  size?: "small" | "medium";
  inputProps?: InputProps;
  noHelperText?: boolean;
};

const FormikCheckbox: React.FC<FormikCheckboxProps> = ({
  helperText,
  name,
  label,
  noLabel,
  options,
  fullWidth,
  row,
  noHelperText = false,
  ...rest
}) => {
  const { errors } = useFormikContext<never>();
  const fieldIsInvalid = Object.prototype.hasOwnProperty.call(errors, name);

  return (
    <FormControl fullWidth={fullWidth} error={fieldIsInvalid}>
      {!noLabel && <FormLabel component="legend">{label ?? name}</FormLabel>}
      <FormGroup row={row}>
        {options.map(option => (
          <Field
            key={`option-${option.value}`}
            component={CheckboxWithLabel}
            {...rest}
            name={name}
            value={option.value}
            type="checkbox"
            Label={{
              label: <span>{option.label}</span>,
            }}
            inputProps={option.inputProps}
          />
        ))}
      </FormGroup>
      {!noHelperText && (
        <FormHelperText>{helperText || errors[name]}</FormHelperText>
      )}
    </FormControl>
  );
};

export default FormikCheckbox;
