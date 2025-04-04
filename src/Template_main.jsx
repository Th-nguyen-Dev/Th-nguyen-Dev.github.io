/* eslint-disable prettier/prettier */
/* eslint-disable react-refresh/only-export-components */
import React from "react";
import ReactDOM from "react-dom/client";
import OfficialExport from "./official/OfficialExport.jsx";
import redux_store from "./context/redux_store.jsx";
import { Provider } from "react-redux";
import "./index.css";
import "./dot.css";

ReactDOM.createRoot(document.getElementById("root")).render(
<div className="absolute top-0 left-0 w-full h-full flex ">
  <Provider store={redux_store}>
    <OfficialExport />
  </Provider>
</div>
);