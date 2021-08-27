import React, { FC, memo } from "react";

import {
  KeyboardDatePicker,
  KeyboardDatePickerProps,
} from "@material-ui/pickers";
// eslint-disable-next-line no-restricted-imports
import { ParsableDate } from "@material-ui/pickers/constants/prop-types";
import { set } from "date-fns";
import { Field, FieldInputProps, FieldMetaProps, FormikProps } from "formik";
import get from "lodash.get";

import { formatDate } from "helpers/convert/format-date";

import CustomMuiTextField from "styles/themes/components/CustomMuiTextField";

interface FieldProps<V = unknown, FormValues = unknown> {
  field?: FieldInputProps<V>;
  form?: FormikProps<FormValues>;
  meta?: FieldMetaProps<V>;
}

type FormikKeyboardDatePickerProps = Omit<
  KeyboardDatePickerProps,
  "name" | "value" | "onChange"
> &
  FieldProps & {
    name: string;
    disableHelperText?: boolean;
  };

const CustomMuiDatePicker: FC<FormikKeyboardDatePickerProps> = ({
  field,
  form,
  format = "yyyy/MM/dd",
  helperText,
  disableHelperText,
  ...props
}) => {
  const formikErrorMessage = get(form?.errors, `${field?.name}`);

  const fieldFormikError =
    formikErrorMessage && get(form?.touched, `${field?.name}`);

  return (
    <KeyboardDatePicker
      TextFieldComponent={CustomMuiTextField}
      value={(field?.value || null) as ParsableDate}
      error={Boolean(fieldFormikError)}
      helperText={
        (!disableHelperText && fieldFormikError && formikErrorMessage) ||
        helperText
      }
      onOpen={() => field?.name && form?.setFieldTouched(field.name, true)}
      onChange={date => {
        const dateValue = new Date(`${date}`);
        dateValue.setHours(0, 0, 0, 0);
        // eslint-disable-next-line no-unused-expressions
        form?.setFieldValue(
          field?.name || "",
          field?.value
            ? set(new Date(`${field.value}`), {
                year: dateValue.getFullYear(),
                month: dateValue.getMonth(),
                date: dateValue.getDate(),
              })
            : formatDate(dateValue),
          true
        );
      }}
      variant="inline"
      disableToolbar
      format={format}
      {...props}
    />
  );
};

const FormikKeyboardDatePicker: FC<FormikKeyboardDatePickerProps> = ({
  name,
  ...props
}) => {
  return <Field name={name} component={CustomMuiDatePicker} {...props} />;
};

export default memo(FormikKeyboardDatePicker);
