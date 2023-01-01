import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Suspense>
  </React.StrictMode>
);
