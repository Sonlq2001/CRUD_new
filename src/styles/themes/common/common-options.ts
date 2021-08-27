// eslint-disable-next-line no-restricted-imports
import { ThemeOptions } from "@material-ui/core/styles/createTheme";

export const commonOptionsDark: ThemeOptions = {
  palette: {
    type: "dark",
    grey: {
      "50": "#F7F8FD",
      "100": "#EFF0F4",
      "200": "#E5E5EA",
      "300": "#D3D4D9",
      "400": "#AFAFB4",
      "500": "#8F8F93",
      "600": "#59595F",
      "700": "#3B3B41",
      "800": "#252629",
      "900": "#161619",
    },
    secondary: {
      main: "#3B3B41",
      dark: "#1C1C1F",
      light: "#696971",
      contrastText: "#FFFFFF",
      lightText: "#b1b1b4",
      opacityLow: "rgba(61, 61, 67, 0.3)",
      opacityMid: "rgba(61, 61, 67, 0.5)",
    },
    info: {
      main: "#2196F3",
      dark: "#0B79D0",
      light: "#64B6F7",
      contrastText: "#ffffff",
      lightText: "#d3eafd",
      darkBg:
        "linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), #2196F3",
    },
    error: {
      main: "#F44336",
      dark: "#E31B0C",
      light: "#F88078",
      contrastText: "#ffffff",
      lightText: "#fdd9d7",
      darkBg:
        "linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), #F44336",
    },
    warning: {
      main: "#FF9800",
      dark: "#C77700",
      light: "#FFB547",
      contrastText: "rgba(0, 0, 0, 0.87)",
      lightText: "#ffeacc",
      darkBg:
        "linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), #FF9800",
    },
    success: {
      main: "#4CAF50",
      dark: "#3B873E",
      light: "#7BC67E",
      contrastText: "#FFFFFF",
      lightText: "#dbefdc",
      darkBg:
        "linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), #4CAF50",
    },
    action: {
      hover: "rgba(255, 255, 255, 0.08)",
      selected: "rgba(255, 255, 255, 0.16)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabled: "rgba(255, 255, 255, 0.3)",
    },
    background: {
      default: "#1C1C1E",
      paper: "#161619",
      defaultOpacity: "rgba(28, 28, 30, 0.8)",
      secondary: "#000000",
      secondaryOpacity: "rgba(28, 28, 30, 0.8)",
    },
    divider: "rgba(247, 248, 253, 0.12)",
    border: "rgba(247, 248, 253, 0.23)",
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(247, 248, 253, 0.72)",
      disabled: "rgba(247, 248, 253, 0.5)",
      contrastText: "#FFFFFF",
    },
    editorText: {
      default: "#FFFFFF",
      grey: "#B1B1B1",
      blue: "#7AACFF",
      skyBlue: "#72CFF8",
      red: "#F27573",
      wineRed: "#F37392",
      pink: "#F799CB",
      orange: "#FDB071",
      green: "#7BB2AB",
      lightGreen: "#9BC07B",
      purple: "#9397FF",
      violet: "#BB8BCF",
    },
    live: {
      main: "#FF1744",
      dark: "#C61132",
      light: "#FF616F",
    },
    white: "#FFFFFF",
    black: "#000000",
  },
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      },
    },
    MuiSnackbarContent: {
      root: {
        backgroundColor: "#F7F8FD",
      },
    },
    MuiRadio: {
      colorSecondary: {
        "&.Mui-checked": {
          color: "#b1b1b4",
        },
      }, // Dark / Secondary / Light Text
      root: {
        "&$disabled": {
          color: "rgba(255, 255, 255, 0.3) !important", // Dark / Action / Disabled
        },
      },
    },
    MuiCheckbox: {
      colorSecondary: {
        "&.Mui-checked": {
          color: "#b1b1b4",
        }, // DARK / Secondary / Dark Text
        "&.Mui-checked[class*='Mui-disabled']": {
          color: "rgba(255, 255, 255, 0.3)",
        },
      },
      colorPrimary: {
        "&.Mui-checked[class*='Mui-disabled']": {
          color: "rgba(255, 255, 255, 0.3)",
        },
      },
    },
    MuiSwitch: {
      track: {
        backgroundColor: "#3B3B41",
      }, // Neutral / Grey-700
      colorSecondary: {
        "&.Mui-checked": {
          color: "#b1b1b4",
        },
      }, // Dark / Secondary / Light Text
    },
    MuiButton: {
      contained: {
        backgroundColor: "#3B3B41",
      },
      textSecondary: {
        color: "#b1b1b4",
      }, // Dark / Secondary / Light Text
    },
    MuiInputBase: {
      root: {
        backgroundColor: "#3B3B41",
        "&[class*='Mui-disabled']": {
          backgroundColor: "rgba(59, 59, 65, 0.5)",
        },
        "&:hover": {
          backgroundColor: "rgba(59, 59, 65, 0.8) !important",
        },
      }, // Neutral / Grey-700
    },
    MuiFilledInput: {
      root: {
        backgroundColor: "#3B3B41",
      }, // Neutral / Grey-700
    },
    MuiOutlinedInput: {
      root: {
        backgroundColor: "transparent",
      },
    },
    MuiPaper: {
      root: {
        "& [class*='MuiPickersClock-clock']": {
          backgroundColor: "#252629",
        }, // Neutral / Grey-800
      },
    },
    MuiTab: {
      textColorSecondary: {
        "&.Mui-selected": {
          color: "#b1b1b4",
        },
      },
    },
    MuiCircularProgress: {
      colorSecondary: {
        color: "#b1b1b4",
      },
    },
    MuiLinearProgress: {
      barColorSecondary: {
        backgroundColor: "#b1b1b4",
      },
    },
    MuiChip: {
      root: {
        backgroundColor: "#3B3B41", // Dark / Secondary / Main
      },
      deleteIcon: {
        color: "rgba(247, 248, 253, 0.23)",
      },
      deleteIconColorSecondary: {
        color: "rgba(255, 255, 255, 0.68)",
      },
      deleteIconColorPrimary: {
        color: "rgba(255, 255, 255, 0.68)",
      },
    },
  },
};

export const commonOptionsLight: ThemeOptions = {
  palette: {
    type: "light",
    grey: {
      "50": "#F7F8FD",
      "100": "#EFF0F4",
      "200": "#E5E5EA",
      "300": "#D3D4D9",
      "400": "#AFAFB4",
      "500": "#8F8F93",
      "600": "#59595F",
      "700": "#3B3B41",
      "800": "#252629",
      "900": "#161619",
    },
    secondary: {
      main: "#EFF0F4",
      dark: "#AFAFB4",
      light: "#F7F8FD",
      contrastText: "rgba(0, 0, 0, 0.87)",
      darkText: "#606062",
      opacityLow: "rgba(239, 240, 244, 0.4)",
      opacityMid: "rgba(239, 240, 244, 0.7)",
    },
    info: {
      main: "#2196F3",
      dark: "#0B79D0",
      light: "#64B6F7",
      contrastText: "#ffffff",
      darkText: "#0d3c61",
      lightBg:
        "linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #2196F3",
    },
    error: {
      main: "#F44336",
      dark: "#E31B0C",
      light: "#F88078",
      contrastText: "#ffffff",
      darkText: "#621b17",
      lightBg:
        "linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #F44336",
    },
    warning: {
      main: "#FF9800",
      dark: "#C77700",
      light: "#FFB547",
      contrastText: "rgba(0, 0, 0, 0.87)",
      darkText: "#663d00",
      lightBg:
        "linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #FF9800",
    },
    success: {
      main: "#4CAF50",
      dark: "#3B873E",
      light: "#7BC67E",
      contrastText: "#FFFFFF",
      darkText: "#1e4620",
      lightBg:
        "linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #4CAF50",
    },
    action: {
      hover: "rgba(0, 0, 0, 0.04)",
      selected: "rgba(0, 0, 0, 0.08)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabled: "rgba(0, 0, 0, 0.26)",
    },
    background: {
      default: "#FFFFFF",
      secondary: "#F8F9FF",
      defaultOpacity: "rgba(255, 255, 255, 0.8)",
      secondaryOpacity: "rgba(250, 250, 250, 0.8)",
    },
    divider: "rgba(22, 22, 25, 0.12)",
    border: "rgba(22, 22, 25, 0.23)",
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(22, 22, 25, 0.6)",
      disabled: "rgba(22, 22, 25, 0.38)",
      contrastText: "rgba(0, 0, 0, 0.87)",
      default: "#484A54",
    },
    editorText: {
      default: "#000000",
      grey: "#6E6E6E",
      blue: "#16489A",
      skyBlue: "#039BE5",
      red: "#E53935",
      wineRed: "#C71555",
      pink: "#DF50A6",
      orange: "#EA7C22",
      green: "#00695C",
      lightGreen: "#689F38",
      purple: "#3E2DA8",
      violet: "#7B1FA2",
    },
    live: {
      main: "#FF1744",
      dark: "#C61132",
      light: "#FF616F",
    },
    white: "#FFFFFF",
    black: "#000000",
  },
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      },
    },
    MuiSnackbarContent: {
      root: {
        backgroundColor: "#303030",
      },
    },
    MuiRadio: {
      colorSecondary: {
        "&.Mui-checked": {
          color: "#606062",
        },
      }, // Light / Secondary / Dark Text
      root: {
        "&$disabled": {
          color: "rgba(0, 0, 0, 0.26) !important", // Light / Action / Disabled
        },
      },
    },
    MuiCheckbox: {
      colorSecondary: {
        "&.Mui-checked:not([class*='Mui-disabled'])": {
          color: "#606062",
        }, // Light / Secondary / Dark Text
        "&.Mui-checked[class*='Mui-disabled']": {
          color: "rgba(0, 0, 0, 0.26)",
        },
      },
      colorPrimary: {
        "&.Mui-checked[class*='Mui-disabled']": {
          color: "rgba(0, 0, 0, 0.26)",
        },
      },
    },
    MuiSwitch: {
      track: {
        backgroundColor: "#161619",
      }, // Neutral / Grey-900
      colorSecondary: {
        "&.Mui-checked": {
          color: "#606062",
        }, // Light / Secondary / Dark Text
        "&.Mui-checked + [class*='MuiSwitch-track']": {
          backgroundColor: "#c3c3c3",
        },
      },
      root: {
        "& .Mui-disabled": {
          color: "#AFAFB4 !important",
        },
      },
    },
    MuiButton: {
      contained: {
        backgroundColor: "#EFF0F4",
      },
      textSecondary: {
        color: "#EFF0F4",
      }, // Light / Secondary / Dark Text
    },
    MuiInputBase: {
      root: {
        backgroundColor: "#EFF0F4",
        "&[class*='Mui-disabled']": {
          backgroundColor: "rgba(239, 240, 244, 0.5)",
        },
        "&:hover": {
          backgroundColor: "rgba(239, 240, 244, 0.8) !important",
        },
      }, // Neutral / Grey-100
    },
    MuiFilledInput: {
      root: {
        backgroundColor: "#EFF0F4",
      }, // Neutral / Grey-700
    },
    MuiOutlinedInput: {
      root: {
        backgroundColor: "transparent",
      },
    },
    MuiPaper: {
      root: {
        "& [class*='MuiPickersClock-clock']": {
          backgroundColor: "#F7F8FD",
        }, // Neutral / Grey-50
      },
    },
    MuiTab: {
      textColorSecondary: {
        "&.Mui-selected": {
          color: "#606062",
        },
      },
    },
    MuiCircularProgress: {
      colorSecondary: {
        color: "#606062",
      },
    },
    MuiLinearProgress: {
      barColorSecondary: {
        backgroundColor: "#606062",
      },
      colorSecondary: {
        backgroundColor: "#c1c2c3",
      },
    },
    MuiChip: {
      root: {
        backgroundColor: "#EFF0F4", // Light / Secondary / Main
      },
      deleteIcon: {
        color: "rgba(22, 22, 25, 0.23)",
      },
      deleteIconColorSecondary: {
        color: "rgba(255, 255, 255, 0.68)",
      },
      deleteIconColorPrimary: {
        color: "rgba(255, 255, 255, 0.68)",
      },
    },
  },
};

export default {
  commonOptionsLight,
  commonOptionsDark,
};
