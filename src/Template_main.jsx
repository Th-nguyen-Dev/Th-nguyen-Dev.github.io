import React from "react";
import ReactDOM from "react-dom/client";
import OfficialExport from "./official/OfficialExport.jsx";
import { WebProvider } from "./context/web_context";
import redux_store from "./context/redux_store.jsx";
import { Provider } from "react-redux";
import "./index.css";
import "./dot.css";
const App = () => {
  return (
    <React.StrictMode>
      <div className="absolute top-0 left-0 w-full h-full flex ">
        <WebProvider>
          <Provider store={redux_store}>
            <OfficialExport />
            {/* <EditorExport /> */}
            {/* <MusicPlayer /> */}
            {/* <FakeLoadScreen /> */}
          </Provider>
        </WebProvider>
      </div>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
