import styled from "styled-components";

import { ThemeStyle } from "@styling/theme";

export const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  color: ${ThemeStyle.colors.text};
  font-family: ${ThemeStyle.fonts.default};
  font-size: ${ThemeStyle.fontSizes.small};
  
  background: ${ThemeStyle.colors.background};
`;

