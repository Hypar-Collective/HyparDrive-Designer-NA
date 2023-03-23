import React from "react";
import { ThemeProvider } from "styled-components";

const ThemeStyle = {
  colors: {
    black: "#000000",
    white: "#ffffff",
    background: "#1C1E23",
    backgroundPanel: "#272A31",
    backgroundHighlight: "#33373F",
    text: "#ffffff",
    accentPink: "#e61b72",
    accentOrange: "#f29100",
    accentPurple: "#784a98",
  },
  fonts: ["barlow"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
    xl: "4em",
    xxl: "5em",
  },
};

type ThemeProps = {
  children: JSX.Element | JSX.Element[];
};

export default function Theme({ children }: ThemeProps) {
  return <ThemeProvider theme={ThemeStyle}>{children}</ThemeProvider>;
}

export { ThemeStyle };
