import React, { FC } from "react";

import { InputProps as StandardInputProps } from "@material-ui/core";
import Box, { BoxProps } from "@material-ui/core/Box";
import TextField, {
  TextFieldProps as MuiTextFieldProps,
} from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { FieldInputProps, FieldMetaProps, FormikProps } from "formik";
import lodashGet from "lodash.get";
import merge from "lodash.merge";

import CustomMuiTypography, { TypographyProps } from "./CustomMuiTypography";

type ShapeTypes = "rounded" | "round" | "straight";

interface FieldProps<V = unknown, FormValues = unknown> {
  field?: FieldInputProps<V>;
  form?: FormikProps<FormValues>;
  meta?: FieldMetaProps<V>;
}

export type TextFieldProps = {
  shape?: ShapeTypes;
  customLabel?: React.ReactNode | string;
  customLabelProps?: TypographyProps;
  customLabelSpacingProps?: BoxProps;
  loadMore?: () => Promise<void> | void;
  menuMaxHeight?: number;
  turnoffAutoFill?: boolean;
  hasValueFromProp?: boolean;
  disableHelperText?: boolean;
} & FieldProps &
  Omit<MuiTextFieldProps, keyof ShapeTypes>;

const useStyles = makeStyles(theme => ({
  MuiSelect: {
    "& .MuiSelect-root": {
      position: "relative",
      "&::after": {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        content: "attr(data-placeholder)",
        color: theme.palette.text.secondary,
        opacity: 0.75,
      },
    },
  },
  CustomLabel: {
    cursor: "default",
  },
  CustomMuiTextField: {
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

const CustomMuiTextField: FC<TextFieldProps> = ({
  children,
  shape,
  placeholder,
  select,
  form,
  customLabel,
  customLabelProps,
  customLabelSpacingProps,
  className,
  loadMore,
  menuMaxHeight,
  turnoffAutoFill,
  hasValueFromProp,
  disableHelperText,
  field,
  id,
  SelectProps,
  ...props
}) => {
  const classes = useStyles();

  const shapeClassName = `${classes.CustomMuiTextField}-${shape || "rounded"}`;

  const propFromFormik: TextFieldProps = {};

  if (
    form &&
    field &&
    lodashGet(form.touched, field.name) &&
    lodashGet(form.errors, field.name)
  ) {
    propFromFormik.error = true;
    propFromFormik.helperText =
      !disableHelperText && lodashGet(form.errors, field.name);
  }

  const handleSelectScroll = (
    event: React.UIEvent<HTMLDivElement, UIEvent>
  ) => {
    const target = event.target as Element;
    event.persist();
    const isScrollToBottom =
      target.scrollHeight - target.scrollTop === target.clientHeight;
    if (isScrollToBottom && loadMore) {
      loadMore();
    }
  };

  const menuPaperClasses = makeStyles({
    menuPaper: {
      maxHeight: menuMaxHeight,
    },
  })();

  let inputProps: StandardInputProps["inputProps"] = {
    id: !select ? id : undefined,
    readOnly: turnoffAutoFill,
    onFocus: (event: React.FocusEvent) => {
      event.target.removeAttribute("readonly");
    },
  };

  if (turnoffAutoFill) {
    inputProps = { ...inputProps, autoComplete: "none" };
  }

  return (
    <>
      {customLabel && (
        <CustomMuiTypography
          fontWeight="fontWeightMedium"
          variant="subtitle2"
          className={classes.CustomLabel}
          {...customLabelProps}
        >
          <Box mb={1} {...customLabelSpacingProps}>
            {id ? <label htmlFor={id}>{customLabel}</label> : customLabel}
          </Box>
        </CustomMuiTypography>
      )}
      <TextField
        className={clsx(shapeClassName, className)}
        select={!!select}
        id={select ? undefined : id}
        placeholder={select ? undefined : placeholder}
        inputProps={inputProps}
        SelectProps={merge(SelectProps, {
          className: clsx(classes.MuiSelect, SelectProps?.className),
          ref: (ref?: HTMLDivElement) => {
            if (ref && placeholder) {
              const contentSpanNode = ref.querySelector(
                "[class*='MuiSelect-root'] > span"
              );
              if (contentSpanNode) {
                (contentSpanNode as HTMLElement).innerText = "";
              }
              // eslint-disable-next-line no-unused-expressions
              ref
                .querySelector("[class*='MuiSelect-root']")
                ?.setAttribute(
                  "data-placeholder",
                  (hasValueFromProp ? props.value : field?.value)
                    ? ""
                    : placeholder
                );
            }
          },
          MenuProps: {
            classes: {
              paper: clsx(
                menuPaperClasses.menuPaper,
                SelectProps?.MenuProps?.classes?.paper
              ),
            },
            onScrollCapture: handleSelectScroll,
          },
        })}
        {...field}
        {...props}
        {...propFromFormik}
      >
        {children}
      </TextField>
    </>
  );
};

CustomMuiTextField.displayName = "CustomMuiTextField";

export default CustomMuiTextField;
