// eslint-disable-next-line no-restricted-imports
import { Overrides } from "@material-ui/core/styles/overrides";

import { fontFamily } from "./font-families";

export const overrides: Overrides = {
  MuiCssBaseline: {
    "@global": {
      "*, *::before, *::after": {
        boxSizing: "border-box",
      },
      "@font-face": [...fontFamily],
    },
  },
  MuiButton: {
    root: {
      lineHeight: "24px",
    },
    containedSizeSmall: {
      fontSize: "0.75rem",
      lineHeight: "22px",
      letterSpacing: "0.46px",
    },
    containedSizeLarge: {
      lineHeight: "26px",
      letterSpacing: "0.46px",
    },
    textSizeSmall: {
      fontSize: "0.75rem",
      lineHeight: "22px",
      letterSpacing: "0.46px",
    },
    textSizeLarge: {
      lineHeight: "26px",
      letterSpacing: "0.46px",
    },
    endIcon: {
      marginLeft: "11.33px",
      "&.MuiButton-iconSizeSmall": {
        marginLeft: "11px",
      },
      "&.MuiButton-iconSizeLarge": {
        marginLeft: "12px",
      },
    },
    startIcon: {
      marginRight: "11.33px",
      "&.MuiButton-iconSizeSmall": {
        marginRight: "11px",
      },
      "&.MuiButton-iconSizeLarge": {
        marginRight: "12px",
      },
    },
  },
  MuiSelect: {
    icon: {
      right: "4px",
    },
    select: {
      "&:not($filled)": {
        paddingRight: "26px",
        paddingLeft: "12px",
      },
    },
    filled: {
      padding: 16,
      paddingTop: 12,
      paddingBottom: 12,
    },
  },
  MuiInputBase: {
    root: {
      fontSize: "14px",
      lineHeight: 1.5,
      "&.Mui-error": {
        border: "1px solid #F44336",
      },
      "&.inputMarginDense .MuiInputBase-input": {
        paddingTop: "12px",
        paddingBottom: "12px",
      },
    },
    multiline: {
      padding: 0,
    },
    marginDense: {
      paddingTop: "0px !important",
    },
    input: {
      padding: "18.5px 12px",
      height: "1.1875rem",
    },
    inputMarginDense: {
      "&:not([class*='filled'])": {
        paddingTop: "12px",
        paddingBottom: "12px",
      },
    },
    inputMultiline: {
      padding: undefined,
    },
    adornedStart: {
      paddingLeft: "12px",
    },
  },
  MuiOutlinedInput: {
    multiline: {
      "&$marginDense": {
        padding: 0,
        paddingTop: "8px",
        paddingBottom: "8px",
        "& textarea": {
          padding: "0px 10px",
        },
      },
    },
  },
  MuiInputLabel: {
    filled: {
      fontSize: "12px",
    },
  },
  MuiFilledInput: {
    root: {
      borderRadius: "4px",
    },
    multiline: {
      paddingTop: 10,
      "&.MuiFilledInput-marginDense": {
        paddingTop: 12,
        paddingBottom: 12,
      },
    },
    inputMarginDense: {
      padding: 16,
      paddingTop: 12,
      paddingBottom: 12,
    },
  },
  MuiFormHelperText: {
    contained: {
      marginLeft: "0px",
    },
  },
  MuiPaper: {
    root: {
      "& .MuiPickersDatePickerRoot-toolbar": {
        paddingLeft: "12px",
        paddingRight: "12px",
      },
      "& [class*='MuiPickersTimePickerToolbar-ampmLabel']": {
        fontSize: "1rem",
      },
      "&.MuiPaper-round:not([class*='MuiMenu'])": {
        borderRadius: "24px",
      },
      "&.MuiPaper-round[class*='MuiMenu']": {
        borderRadius: "16px",
      },
      "&.MuiPaper-straight": {
        borderRadius: "0px",
      },
      "&.MuiPaper-rounded": {
        borderRadius: "4px",
      },
    },
  },
  MuiBreadcrumbs: {
    root: {
      "& .MuiTypography-root": {
        display: "flex",
        fontSize: "14px",
        lineHeight: "21px",
      },
      "& .MuiSvgIcon-root": {
        width: "15px",
        height: "auto",
      },
    },
  },
  MuiTab: {
    root: {
      "& .MuiSvgIcon-root": {
        fontSize: "1.25rem",
      },
    },
    labelIcon: {
      "& .MuiTab-wrapper > *:first-child": {
        marginBottom: "3px",
      },
    },
  },
  MuiTypography: {
    gutterBottom: {
      marginBottom: "0.25rem",
    },
  },
  MuiTablePagination: {
    selectRoot: {
      marginLeft: 0,
      background: "transparent",
      "& .MuiSvgIcon-root": {
        top: "calc(50% - 12px)",
        right: "2px",
        position: "absolute",
        pointerEvents: "none",
        color: "#606062",
      },
      "& ~ .MuiTablePagination-caption": {
        color: "inherit",
      },
    },
    select: {
      fontSize: "12px",
      paddingTop: "8px !important",
      paddingBottom: "8px",
    },
    selectIcon: {
      color: "#606062",
    },
    caption: {
      fontSize: "12px",
      color: "rgba(22, 22, 25, 0.6)",
    },
  },
};
