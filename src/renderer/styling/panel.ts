import styled from "styled-components";

import { ThemeStyle } from "@styling/theme";

type PanelBackgroundType = "background" | "panel" | "highlight";

export interface PanelWrapperProps {
    type?: PanelBackgroundType;
 }

export const PanelWrapper = styled.div`
  /* display: inline-block; */
  height: 100%;
  width: 100%;
  
  display: flex;
  background: ${(props: PanelWrapperProps) => {
    switch (props.type) {
      case "background":
        return ThemeStyle.colors.background;
      case "panel":
        return ThemeStyle.colors.backgroundPanel;
      case "highlight":
        return ThemeStyle.colors.backgroundHighlight;
    }
   }};
`;

export const CenteredText = styled.h1`
    height: 100%;
    width: 100%;
    text-align: center;

    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
`;