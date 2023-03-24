import React from "react";

import { CenteredText } from "@/renderer/styling/panel";
import { Allotment } from "allotment";
import PreferenceIndex from "./preferenceindex";
import PreferenceInspector from "./preferenceinspector";

export default function PreferenceView() {
  return (
    <Allotment defaultSizes={[20, 80]}>
      <Allotment.Pane minSize={200} maxSize={500}>
        <PreferenceIndex />
      </Allotment.Pane>
      <Allotment.Pane minSize={200}>
        <PreferenceInspector />
      </Allotment.Pane>
    </Allotment>
  );
}
