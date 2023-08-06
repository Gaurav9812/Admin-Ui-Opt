import React from "react";
import ReactDOM from "react-dom/client";
import Members from "./components/Members";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = function () {
  return (
    <div id="main-container">
      <Members />
    </div>
  );
};

root.render(<App />);
