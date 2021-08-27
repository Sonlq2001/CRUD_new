import {
  Color,
  createTheme,
  PaletteType,
  responsiveFontSizes,
  Theme,
} from "@material-ui/core";
// eslint-disable-next-line no-restricted-imports
import { MuiPickersOverrides } from "@material-ui/pickers/typings/overrides";
import cloneDeep from "lodash.clonedeep";
import merge from "lodash.merge";

import {
  commonOptionsDark,
  commonOptionsLight,
} from "./themes/common/common-options";
import { overrides } from "./themes/common/overrides";
import { shadows } from "./themes/common/shadows";
import { themeComponentsProps } from "./themes/common/theme-props";
import { typography } from "./themes/common/typography";
import { ThemeTypes } from "./themes/theme-constants";
import { themeOptionsOne } from "./themes/theme-one";

export function getAppTheme(
  themeType: ThemeTypes = ThemeTypes.LIGHT,
  responseHeadingScale = true
): Theme {
  const commonThemeOptions =
    themeType === ThemeTypes.DARK ? commonOptionsDark : commonOptionsLight;

  if (responseHeadingScale) {
    return merge(
      responsiveFontSizes(
        createTheme(
          cloneDeep({
            props: themeComponentsProps,
            ...merge({ overrides }, commonThemeOptions, themeOptionsOne),
            shadows,
            typography,
          })
        )
      ),
      { typography }
    );
  }

  return createTheme(
    cloneDeep({
      props: themeComponentsProps,
      ...merge({ overrides }, commonThemeOptions, themeOptionsOne),
      shadows,
      typography,
    })
  );
}

type OverridesNameToClassKey = {
  [P in keyof Required<MuiPickersOverrides>]: keyof MuiPickersOverrides[P];
};

declare module "@material-ui/core/styles/overrides" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface ComponentNameToClassKey extends OverridesNameToClassKey {}
}

declare module "@material-ui/core/styles/createPalette" {
  interface SimplePaletteColorOptions {
    light?: string;
    main: string;
    dark?: string;
    contrastText?: string;
    darkText?: string;
    lightText?: string;
    darkBg?: string;
    lightBg?: string;
    opacityLow?: string;
    opacityMid?: string;
  }
  interface PaletteColor {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
    darkText?: string;
    lightText?: string;
    darkBg?: string;
    lightBg?: string;
    opacityLow?: string;
    opacityMid?: string;
  }

  interface PaletteOptions {
    primary?: PaletteColorOptions;
    secondary?: PaletteColorOptions;
    error?: PaletteColorOptions;
    warning?: PaletteColorOptions;
    info?: PaletteColorOptions;
    success?: PaletteColorOptions;
    type?: PaletteType;
    tonalOffset?: PaletteTonalOffset;
    contrastThreshold?: number;
    common?: Partial<CommonColors>;
    grey?: ColorPartial;
    text?: Partial<TypeText>;
    divider?: string;
    border?: string;
    action?: Partial<TypeAction>;
    background?: Partial<TypeBackground>;
    getContrastText?: (background: string) => string;
    accent?: PaletteColorOptions;
    accent2?: PaletteColorOptions;
    editorText?: EditorTextOptions;
    live?: LiveOptions;
    white?: string;
    black?: string;
  }

  interface Palette {
    primary: PaletteColor;
    secondary: PaletteColor;
    error: PaletteColor;
    warning: PaletteColor;
    info: PaletteColor;
    success: PaletteColor;
    type: PaletteType;
    tonalOffset: PaletteTonalOffset;
    contrastThreshold: number;
    common: CommonColors;
    grey: Color;
    text: TypeText;
    divider: string;
    border: string;
    action: TypeAction;
    background: TypeBackground;
    getContrastText: (background: string) => string;
    accent?: PaletteColorOptions;
    accent2?: PaletteColorOptions;
    editorText?: EditorTextOptions;
    live?: LiveOptions;
    white?: string;
    black?: string;
  }

  export interface EditorTextOptions {
    default?: string;
    grey?: string;
    blue?: string;
    skyBlue?: string;
    red?: string;
    wineRed?: string;
    pink?: string;
    orange?: string;
    green?: string;
    lightGreen?: string;
    purple?: string;
    violet?: string;
  }

  export interface LiveOptions {
    main?: string;
    dark?: string;
    light?: string;
  }

  export interface TypeText {
    primary: string;
    secondary: string;
    disabled: string;
    hint: string;
    contrastText: string;
    default: string;
  }
  export interface TypeBackground {
    default: string;
    defaultOpacity: string;
    paper: string;
    secondary: string;
    secondaryOpacity: string;
  }
}
