import * as React from "react";

import {
  Box,
  BoxProps,
  createStyles,
  makeStyles,
  MenuItem,
} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import { SelectProps } from "@material-ui/core/Select";
import { ArrowDropDownRounded } from "@material-ui/icons";
import clsx from "clsx";
import { Field, useFormikContext } from "formik";
import { Select } from "formik-material-ui";
import get from "lodash.get";

import { ShapeTypes } from "types/shape.types";

import CustomMuiTypography, {
  TypographyProps,
} from "styles/themes/components/CustomMuiTypography";

type SelectOptionValue = string | number;

type SelectOption = {
  label: React.ReactNode;
  value: SelectOptionValue;
};

type FormikSelectProps = Omit<SelectProps, "name"> & {
  options: SelectOption[];
  shape?: ShapeTypes;
  name: string;
  helperText?: string;
  noLabel?: boolean;
  sizeSmall?: boolean;
  labelProps?: TypographyProps;
  labelSpacingProps?: BoxProps;
  loadMore?: () => Promise<void> | void;
  clearable?: boolean;
  enableScrollLock?: boolean;
};

const useStyles = makeStyles(theme =>
  createStyles({
    selectEmpty: {
      color: theme.palette.text.hint,
    },
    menuPaper: {
      maxHeight: 200,
    },
    hidden: {
      display: "none !important",
    },
    customMuiTextField: {
      "&-round": {
        borderRadius: "12px",
      },
      "&-rounded": {
        borderRadius: "4px",
      },
      "&-straight": {
        borderRadius: "0px",
      },
    },
  })
);

export const NativeHtmlOption = (
  props: React.DetailedHTMLProps<
    React.OptionHTMLAttributes<HTMLOptionElement>,
    HTMLOptionElement
  >
) => {
  return <option {...props} />;
};

const FormikSelect: React.FC<FormikSelectProps> = ({
  id,
  shape,
  native,
  options,
  label,
  labelProps,
  labelSpacingProps,
  name,
  noLabel,
  helperText,
  fullWidth,
  loadMore,
  placeholder,
  className,
  sizeSmall,
  clearable,
  enableScrollLock = false,
  ...rest
}) => {
  const classes = useStyles();

  const shapeClassName = `${classes.customMuiTextField}-${shape || "rounded"}`;

  const { errors, values: formikValues } = useFormikContext<never>();
  const errorText = get(errors, name);

  const handleSelectScroll = (event: Event) => {
    const target = event.target as Element;
    const isScrollToBottom =
      target.scrollHeight - target.scrollTop === target.clientHeight;
    if (isScrollToBottom && loadMore) {
      loadMore();
    }
  };

  const OptionComponent = native ? NativeHtmlOption : MenuItem;

  return (
    <FormControl error={!!errorText} fullWidth={fullWidth}>
      {!noLabel && (
        <CustomMuiTypography
          variant="subtitle2"
          color="textSecondary"
          {...labelProps}
        >
          <Box mb={1} {...labelSpacingProps} position="relative">
            {id ? <label htmlFor={id}>{label ?? name}</label> : label ?? name}
          </Box>
        </CustomMuiTypography>
      )}
      <Field
        id={id}
        component={Select}
        {...rest}
        name={name}
        MenuProps={{
          classes: { paper: classes.menuPaper },
          disableScrollLock: !enableScrollLock,
          onScroll: handleSelectScroll,
        }}
        className={clsx(
          !get(formikValues, name) && !!placeholder && classes.selectEmpty,
          className,
          shapeClassName,
          sizeSmall && "inputMarginDense"
        )}
        displayEmpty
        IconComponent={() => <ArrowDropDownRounded color="action" />}
      >
        {placeholder !== undefined && (
          <OptionComponent
            value=""
            disabled={!clearable}
            className={clsx({ [classes.hidden]: !clearable })}
          >
            {placeholder}
          </OptionComponent>
        )}
        {options.map(option => (
          <OptionComponent key={option.value} value={option.value}>
            {option.label}
          </OptionComponent>
        ))}
      </Field>
      <FormHelperText>{helperText || errorText}</FormHelperText>
    </FormControl>
  );
};

export default FormikSelect;
