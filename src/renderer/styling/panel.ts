import styled from "styled-components";

import { ThemeStyle } from "@styling/theme";

export const PanelWrapper = styled.div`
  /* display: inline-block; */
  height: 100%;
  width: 100%;
  
  display: flex;
  background: ${ThemeStyle.colors.backgroundPanel};
`;

export const CenteredText = styled.h1`
    width: 100%;
    text-align: center;

    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
`;