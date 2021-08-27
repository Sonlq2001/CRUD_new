import React, { useState, useEffect } from "react";

import { MenuItem, IconButton } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { set } from "date-fns";
import { Field, useFormikContext } from "formik";
import get from "lodash.get";

import { formatDate } from "helpers/convert/format-date";
import { eachMinuteOfInterval } from "helpers/date-time/time.helper";

import CustomMuiTextField, {
  TextFieldProps,
} from "styles/themes/components/CustomMuiTextField";

import { useStyles } from "./FormikTimeSelect.styles";

type FormikTimeSelectProps = Omit<TextFieldProps, "name"> & {
  name: string;
  start?: Date;
  end?: Date;
  step?: number;
  perStep?: number;
  formatTime?: string;
};

const FormikTimeSelect: React.FC<FormikTimeSelectProps> = ({
  name,
  placeholder,
  start,
  end,
  step,
  perStep,
  formatTime,
  disableHelperText,
  ...rest
}) => {
  const [timeOptions, setTimeOptions] = useState<string[]>(() =>
    eachMinuteOfInterval({
      start,
      end,
      step,
      perStep,
      formatTime,
    })
  );

  const [isOpenSelectDropDown, setIsOpenSelectDropDown] = useState(false);

  const { values, setFieldValue, setFieldTouched } = useFormikContext();

  const value = get(values, name);

  const classes = useStyles();

  useEffect(() => {
    setTimeOptions(
      eachMinuteOfInterval({
        start,
        end,
        step,
        perStep,
        formatTime,
      })
    );
  }, [start, end, step, perStep, formatTime]);

  const convertTimeSelectValueToDateTimeValue = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { hours, minutes } = e.target.value.match(
      /(?<hours>\d{2}):(?<minutes>\d{2})/
    )?.groups as { hours: string; minutes: string };

    setFieldValue(
      name,
      set(value ? new Date(value) : new Date(), {
        hours: Number(hours),
        minutes: Number(minutes),
      })
    );
  };

  const date = value ? new Date(value) : null;
  if (date) {
    date.setMinutes(
      Math.round(date.getMinutes() / (perStep || 15)) * (perStep || 15)
    );
  }

  const selectValueProps = {
    value: date ? formatDate(date, "HH:mm") : "",
    onChange: convertTimeSelectValueToDateTimeValue,
  };

  return (
    <Field
      disableHelperText={disableHelperText}
      menuMaxHeight={320}
      hasValueFromProp
      component={CustomMuiTextField}
      select
      {...rest}
      placeholder={placeholder || "–-/-–"}
      name={name}
      {...selectValueProps}
      SelectProps={{
        className: classes.formikTimeSelect,
        MenuProps: {
          open: isOpenSelectDropDown,
          onClose: () => {
            setIsOpenSelectDropDown(false);
          },
          getContentAnchorEl: null,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center",
          },
        },
        IconComponent: () => (
          <IconButton
            onClick={() => {
              setFieldTouched(name, true);
              setIsOpenSelectDropDown(true);
            }}
          >
            <AccessTimeIcon fontSize="small" />
          </IconButton>
        ),
      }}
    >
      {timeOptions.map(time => (
        <MenuItem
          key={time}
          value={time}
          onClick={() => {
            setIsOpenSelectDropDown(false);
          }}
        >
          {time}
        </MenuItem>
      ))}
    </Field>
  );
};

export default FormikTimeSelect;
