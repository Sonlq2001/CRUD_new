// eslint-disable-next-line no-restricted-imports
import { ThemeOptions } from "@material-ui/core/styles/createTheme";

export const themeOptionsOne: ThemeOptions = {
  palette: {
    primary: {
      main: "#4B8C8C",
      dark: "#254450",
      light: "#7E9DAB",
      darkText: "#202c32",
      lightText: "#dce2e5",
      contrastText: "#ffffff",
      opacityLow: "rgba(80, 111, 124, 0.1)",
      opacityMid: "rgba(80, 111, 124, 0.5)",
    },
    accent: {
      main: "#F2C14E",
      dark: "#C09645",
      light: "#FFE8AD",
      darkText: "#614d1f",
      lightText: "#fcf4dc",
      contrastText: "rgba(0, 0, 0, 0.87)",
      opacityLow: "rgba(242, 193, 78, 0.1)",
      opacityMid: "rgba(242, 193, 78, 0.5)",
    },
    accent2: {
      main: "#FF6F59",
      dark: "#C63D2F",
      light: "#FFA186",
      darkText: "#662c24",
      lightText: "#ffe2de",
      contrastText: "#ffffff",
      opacityLow: "rgba(255, 111, 89, 0.1)",
      opacityMid: "rgba(255, 111, 89, 0.5)",
    },
  },
  overrides: {
    MuiButton: {
      textPrimary: {
        color: "#254450",
      }, // Theme / Primary / Dark
    },
    MuiRadio: {
      colorPrimary: {
        "&.Mui-checked": {
          color: "#254450",
        },
      },
    },
    MuiCheckbox: {
      colorPrimary: {
        "&.Mui-checked": {
          color: "#254450",
        },
      },
    },
    MuiSlider: {
      track: {
        backgroundColor: "#254450",
      },
      markActive: {
        backgroundColor: "#4B8C8C",
      },
    },
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: "#4B8C8C",
      },
    },
    MuiLink: {
      root: {
        "&.MuiTypography-colorPrimary": {
          color: "#254450",
        },
      },
    },
    MuiTab: {
      textColorPrimary: {
        "&.Mui-selected": {
          color: "#254450",
          "& .MuiSvgIcon-root": {
            color: "#4B8C8C",
          },
        },
      },
    },
    MuiLinearProgress: {
      barColorPrimary: {
        backgroundColor: "#254450",
      },
    },
    MuiBadge: {
      colorPrimary: {
        backgroundColor: "#F2C14E",
      },
      colorSecondary: {
        backgroundColor: "#4B8C8C",
        color: "#ffffff",
      },
    },
    MuiChip: {
      avatarColorPrimary: {
        backgroundColor: "#4B8C8C",
      },
      colorSecondary: {
        color: "#ffffff",
        backgroundColor: "#F2C14E", // Theme / Accent / Main
        "& [class*='avatarColorSecondary']": {
          color: "#ffffff",
          backgroundColor: "#C09645", // Theme / Accent / Dark
        },
      },
      outlinedSecondary: {
        borderColor: "#F2C14E", // Theme / Accent / Main
        color: "#C09645", // Theme / Accent / Dark
        "& [class*='avatarColorSecondary']": {
          color: "#ffffff",
          backgroundColor: "#F2C14E", // Theme / Accent / Main
        },
        "& [class*='deleteIconOutlinedColorSecondary']": {
          color: "rgba(242, 193, 78, 0.5)", // Theme / Accent / Opacity Mid
        },
      },
    },
  },
};
