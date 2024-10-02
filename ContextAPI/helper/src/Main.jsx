import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App";
// import AppRoot from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <AppRoot />
//   </StrictMode>
// );

// import { createRoot } from "react-dom/client";

import AppRoot from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1>hello</h1>
    <AppRoot />
  </StrictMode>);
