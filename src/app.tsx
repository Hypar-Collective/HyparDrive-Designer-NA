import * as React from "react";
import * as ReactDOMClient from "react-dom/client";

const App = () => {
  return <div>Hello World</div>;
};

const rootElement = document.getElementById("app");
const root = ReactDOMClient.createRoot(rootElement);
root.render(<App />);
