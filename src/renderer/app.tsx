import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
import Theme from "./styling/theme";

// eslint-disable-next-line import/namespace
import { Allotment } from "allotment";
import "allotment/dist/style.css";

import { AppWrapper } from "@styling/main";

import ComponentView from "@components/components/componentview";
import InstallationVisualiser from "@components/visualiser/installationvisualiser";
import PropertyViewer from "@components/properties/propertyviewer";
import AnimationEditor from "@components/animations/animationeditor";

const App = () => {
  return (
    <React.StrictMode>
      <Theme>
        <AppWrapper>
          <Allotment vertical defaultSizes={[70, 30]}>
            <Allotment.Pane minSize={200} snap>
              <Allotment defaultSizes={[20, 60, 20]}>
                <Allotment.Pane minSize={200} snap>
                  <ComponentView />
                </Allotment.Pane>
                <Allotment.Pane minSize={500}>
                  <InstallationVisualiser />
                </Allotment.Pane>
                <Allotment.Pane minSize={200} snap>
                  <PropertyViewer />
                </Allotment.Pane>
              </Allotment>
            </Allotment.Pane>
            <Allotment.Pane minSize={200} snap>
              <AnimationEditor />
            </Allotment.Pane>
          </Allotment>
        </AppWrapper>
      </Theme>
    </React.StrictMode>
  );
};

const rootElement = document.getElementById("app");
const root = ReactDOMClient.createRoot(rootElement);
root.render(<App />);
