import { StrictMode } from "react";
import ReactDOM from "react-dom";

import ConnectFour from "./connectFour/game";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ConnectFour />
  </StrictMode>,
  rootElement
);
