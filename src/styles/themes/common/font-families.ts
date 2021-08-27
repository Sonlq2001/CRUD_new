import * as CSS from "csstype";

// Font weight with file name
// Light: 300
// Regular: 400
// Medium: 500
// Bold: 700

// DancingScript font face
import DancingScriptBold from "assets/fonts/dancing-script/dancing-script-bold.ttf";
import DancingScriptMedium from "assets/fonts/dancing-script/dancing-script-medium.ttf";
import DancingScriptRegular from "assets/fonts/dancing-script/dancing-script-regular.ttf";
// JosefinSans font face
import JosefinSansBold from "assets/fonts/josefin-sans/josefin-sans-bold.ttf";
import JosefinSansLight from "assets/fonts/josefin-sans/josefin-sans-light.ttf";
import JosefinSansMedium from "assets/fonts/josefin-sans/josefin-sans-medium.ttf";
import JosefinSansRegular from "assets/fonts/josefin-sans/josefin-sans-regular.ttf";
// Lemonada font face
import LemonadaBold from "assets/fonts/lemonada/lemonada-bold.ttf";
import LemonadaLight from "assets/fonts/lemonada/lemonada-light.ttf";
import LemonadaMedium from "assets/fonts/lemonada/lemonada-medium.ttf";
import LemonadaRegular from "assets/fonts/lemonada/lemonada-regular.ttf";
// lobster font face
import LobsterRegular from "assets/fonts/lobster/lobster-regular.ttf";
// Montserrat font face
import MontserratBold from "assets/fonts/montserrat/montserrat-bold.ttf";
import MontserratLight from "assets/fonts/montserrat/montserrat-light.ttf";
import MontserratMedium from "assets/fonts/montserrat/montserrat-medium.ttf";
import MontserratRegular from "assets/fonts/montserrat/montserrat-regular.ttf";
// NotoSanCJKJp font face
import NotoSansCjKjpBold from "assets/fonts/noto-sans-cjkjp/NotoSansCJKjp-Bold.ttf";
import NotoSansCjKjpLight from "assets/fonts/noto-sans-cjkjp/NotoSansCJKjp-Light.ttf";
import NotoSansCjKjpMedium from "assets/fonts/noto-sans-cjkjp/NotoSansCJKjp-Medium.ttf";
import NotoSansCjKjpRegular from "assets/fonts/noto-sans-cjkjp/NotoSansCJKjp-Regular.ttf";
// Oswald font face
import OswaldBold from "assets/fonts/oswald/oswald-bold.ttf";
import OswaldLight from "assets/fonts/oswald/oswald-light.ttf";
import OswaldMedium from "assets/fonts/oswald/oswald-medium.ttf";
import OswaldRegular from "assets/fonts/oswald/oswald-regular.ttf";
// PlayfairDisplay font face
import PlayfairDisplayBold from "assets/fonts/playfair-display/playfair-display-bold.ttf";
import PlayfairDisplayMedium from "assets/fonts/playfair-display/playfair-display-medium.ttf";
import PlayfairDisplayRegular from "assets/fonts/playfair-display/playfair-display-regular.ttf";
// RobotoSlab font face
import RobotoSlabBold from "assets/fonts/roboto-slab/roboto-slab-bold.ttf";
import RobotoSlabLight from "assets/fonts/roboto-slab/roboto-slab-light.ttf";
import RobotoSlabMedium from "assets/fonts/roboto-slab/roboto-slab-medium.ttf";
import RobotoSlabRegular from "assets/fonts/roboto-slab/roboto-slab-regular.ttf";
// RoundedMPlus1c font face
import RoundedMPlus1cBold from "assets/fonts/rounded-m-plus1c/rounded-m-plus1c-bold.ttf";
import RoundedMPlus1cLight from "assets/fonts/rounded-m-plus1c/rounded-m-plus1c-light.ttf";
import RoundedMPlus1cMedium from "assets/fonts/rounded-m-plus1c/rounded-m-plus1c-medium.ttf";
import RoundedMPlus1cRegular from "assets/fonts/rounded-m-plus1c/rounded-m-plus1c-regular.ttf";

// Begin NotoSansCjKjp fontface css
const notoSansCjKjpLight: CSS.FontFace = {
  fontFamily: "NotoSansCjKjp",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 300,
  src: `
  url(${NotoSansCjKjpLight}) format('truetype')
  `,
};

const notoSansCjKjpRegular: CSS.FontFace = {
  fontFamily: "NotoSansCjKjp",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    url(${NotoSansCjKjpRegular}) format('truetype')
  `,
};

const notoSansCjKjpMedium: CSS.FontFace = {
  fontFamily: "NotoSansCjKjp",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 500,
  src: `
    url(${NotoSansCjKjpMedium}) format('truetype')
  `,
};

const notoSansCjKjpBold: CSS.FontFace = {
  fontFamily: "NotoSansCjKjp",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 700,
  src: `
    url(${NotoSansCjKjpBold}) format('truetype')
  `,
};

export const notoSansCjKjp = [
  notoSansCjKjpLight,
  notoSansCjKjpRegular,
  notoSansCjKjpMedium,
  notoSansCjKjpBold,
];

// End NotoSansCjKjp fontface css

// Begin RoundedMPlus1c fontface css
const roundedMPlus1cRegular: CSS.FontFace = {
  fontFamily: "RoundedMPlus1c",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    url(${RoundedMPlus1cRegular}) format('truetype')
  `,
};

const roundedMPlus1cLight: CSS.FontFace = {
  fontFamily: "RoundedMPlus1c",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 300,
  src: `
    url(${RoundedMPlus1cLight}) format('truetype')
  `,
};

const roundedMPlus1cMedium: CSS.FontFace = {
  fontFamily: "RoundedMPlus1c",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 500,
  src: `
    url(${RoundedMPlus1cMedium}) format('truetype')
  `,
};

const roundedMPlus1cBold: CSS.FontFace = {
  fontFamily: "RoundedMPlus1c",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 700,
  src: `
    url(${RoundedMPlus1cBold}) format('truetype')
  `,
};

export const roundedMPlus1c = [
  roundedMPlus1cRegular,
  roundedMPlus1cLight,
  roundedMPlus1cMedium,
  roundedMPlus1cBold,
];

// End RoundedMPlus1c fontface css

// Begin Oswald fontface css
const oswaldRegular: CSS.FontFace = {
  fontFamily: "Oswald",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    url(${OswaldRegular}) format('truetype')
  `,
};

const oswaldLight: CSS.FontFace = {
  fontFamily: "Oswald",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 300,
  src: `
    url(${OswaldLight}) format('truetype')
  `,
};

const oswaldMedium: CSS.FontFace = {
  fontFamily: "Oswald",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 500,
  src: `
    url(${OswaldMedium}) format('truetype')
  `,
};

const oswaldBold: CSS.FontFace = {
  fontFamily: "Oswald",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 700,
  src: `
    url(${OswaldBold}) format('truetype')
  `,
};

export const oswald = [oswaldRegular, oswaldLight, oswaldMedium, oswaldBold];

// End Oswald fontface css

// Begin Montserrat fontface css
const montserratRegular: CSS.FontFace = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    url(${MontserratRegular}) format('truetype')
  `,
};

const montserratLight: CSS.FontFace = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 300,
  src: `
    url(${MontserratLight}) format('truetype')
  `,
};

const montserratMedium: CSS.FontFace = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 500,
  src: `
    url(${MontserratMedium}) format('truetype')
  `,
};

const montserratBold: CSS.FontFace = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 700,
  src: `
    url(${MontserratBold}) format('truetype')
  `,
};

export const montserrat = [
  montserratRegular,
  montserratLight,
  montserratMedium,
  montserratBold,
];

// End Montserrat fontface css

// Begin RobotoSlab fontface css
const robotoSlabRegular: CSS.FontFace = {
  fontFamily: "RobotoSlab",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    url(${RobotoSlabRegular}) format('truetype')
  `,
};

const robotoSlabLight: CSS.FontFace = {
  fontFamily: "RobotoSlab",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 300,
  src: `
    url(${RobotoSlabLight}) format('truetype')
  `,
};

const robotoSlabMedium: CSS.FontFace = {
  fontFamily: "RobotoSlab",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 500,
  src: `
    url(${RobotoSlabMedium}) format('truetype')
  `,
};

const robotoSlabBold: CSS.FontFace = {
  fontFamily: "RobotoSlab",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 700,
  src: `
    url(${RobotoSlabBold}) format('truetype')
  `,
};

export const robotoSlab = [
  robotoSlabRegular,
  robotoSlabLight,
  robotoSlabMedium,
  robotoSlabBold,
];

// End RobotoSlab fontface css

// Begin JosefinSans fontface css
const josefinSansRegular: CSS.FontFace = {
  fontFamily: "JosefinSans",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    url(${JosefinSansRegular}) format('truetype')
  `,
};

const josefinSansLight: CSS.FontFace = {
  fontFamily: "JosefinSans",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 300,
  src: `
    url(${JosefinSansLight}) format('truetype')
  `,
};

const josefinSansMedium: CSS.FontFace = {
  fontFamily: "JosefinSans",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 500,
  src: `
    url(${JosefinSansMedium}) format('truetype')
  `,
};

const josefinSansBold: CSS.FontFace = {
  fontFamily: "JosefinSans",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 700,
  src: `
    url(${JosefinSansBold}) format('truetype')
  `,
};

export const josefinSans = [
  josefinSansRegular,
  josefinSansLight,
  josefinSansMedium,
  josefinSansBold,
];

// End JosefinSans fontface css

// Begin Lemonada fontface css
const lemonadaRegular: CSS.FontFace = {
  fontFamily: "Lemonada",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    url(${LemonadaRegular}) format('truetype')
  `,
};

const lemonadaLight: CSS.FontFace = {
  fontFamily: "Lemonada",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 300,
  src: `
    url(${LemonadaLight}) format('truetype')
  `,
};

const lemonadaMedium: CSS.FontFace = {
  fontFamily: "Lemonada",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 500,
  src: `
    url(${LemonadaMedium}) format('truetype')
  `,
};

const lemonadaBold: CSS.FontFace = {
  fontFamily: "Lemonada",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 700,
  src: `
    url(${LemonadaBold}) format('truetype')
  `,
};

export const lemonada = [
  lemonadaRegular,
  lemonadaLight,
  lemonadaMedium,
  lemonadaBold,
];

// End Lemonada fontface css

// Begin DancingScript fontface css
const dancingScriptRegular: CSS.FontFace = {
  fontFamily: "DancingScript",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    url(${DancingScriptRegular}) format('truetype')
  `,
};

const dancingScriptMedium: CSS.FontFace = {
  fontFamily: "DancingScript",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 500,
  src: `
    url(${DancingScriptMedium}) format('truetype')
  `,
};

const dancingScriptBold: CSS.FontFace = {
  fontFamily: "DancingScript",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 700,
  src: `
    url(${DancingScriptBold}) format('truetype')
  `,
};

export const dancingScript = [
  dancingScriptRegular,
  dancingScriptMedium,
  dancingScriptBold,
];

// End DancingScript fontface css

// Begin Lobster fontface css
const lobsterRegular: CSS.FontFace = {
  fontFamily: "Lobster",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    url(${LobsterRegular}) format('truetype')
  `,
};

export const lobsterScript = [lobsterRegular];

// End Lobster fontface css

// Begin PlayfairDisplay fontface css
const playfairDisplayRegular: CSS.FontFace = {
  fontFamily: "PlayfairDisplay",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    url(${PlayfairDisplayRegular}) format('truetype')
  `,
};

const playfairDisplayMedium: CSS.FontFace = {
  fontFamily: "PlayfairDisplay",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 500,
  src: `
    url(${PlayfairDisplayMedium}) format('truetype')
  `,
};

const playfairDisplayBold: CSS.FontFace = {
  fontFamily: "PlayfairDisplay",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 700,
  src: `
    url(${PlayfairDisplayBold}) format('truetype')
  `,
};

export const playfairDisplay = [
  playfairDisplayRegular,
  playfairDisplayMedium,
  playfairDisplayBold,
];

// End PlayfairDisplay fontface css

export const fontFamily = [
  ...notoSansCjKjp,
  ...roundedMPlus1c,
  ...oswald,
  ...montserrat,
  ...robotoSlab,
  ...josefinSans,
  ...lemonada,
  ...dancingScript,
  ...lobsterScript,
  ...playfairDisplay,
];
