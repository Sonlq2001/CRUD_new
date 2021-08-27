// eslint-disable-next-line no-restricted-imports
import { TypographyOptions } from "@material-ui/core/styles/createTypography";

// Responsive Heading Scale except H5 is same as Material-UI typography
// Check at: https://material-ui.com/customization/typography/

export const typography: TypographyOptions = {
  fontFamily: "'Roboto', 'Noto Sans JP', sans-serif",
  h1: {
    letterSpacing: 0,
  },
  h2: {
    letterSpacing: 0,
  },
  h4: {
    letterSpacing: 0,
  },
  h5: {
    "@media (min-width:600px)": {
      fontSize: "1.5625rem",
    },
    "@media (min-width:960px)": {
      fontSize: "1.5625rem",
    },
    "@media (min-width:1280px)": {
      fontSize: "1.5625rem",
    },
  },
  h6: {
    letterSpacing: 0,
  },
  subtitle1: {
    letterSpacing: 0,
  },
  subtitle2: {
    letterSpacing: 0,
  },
  body1: {
    letterSpacing: 0,
  },
  body2: {
    letterSpacing: 0,
  },
  button: {
    letterSpacing: 0,
  },
  caption: {
    letterSpacing: 0,
  },
  overline: {
    letterSpacing: 0,
  },
};
