import * as React from "react";

import { IconButton } from "@material-ui/core";
import InsertInvitationRounded from "@material-ui/icons/InsertInvitationRounded";
import { Field } from "formik";
import { DatePicker, DatePickerProps } from "formik-material-ui-pickers";

type FormikDatePickerProps = Omit<
  DatePickerProps,
  "field" | "form" | "meta" | "onChange"
> & {
  name: string;
  hasIcon?: boolean;
};

const FormikDatePicker: React.FC<FormikDatePickerProps> = ({
  name,
  hasIcon,
  InputProps,
  ...rest
}) => (
  <Field
    component={DatePicker}
    name={name}
    InputProps={{
      endAdornment: hasIcon && (
        <IconButton disabled>
          <InsertInvitationRounded color="action" />
        </IconButton>
      ),
      ...InputProps,
    }}
    {...rest}
  />
);

export default FormikDatePicker;
