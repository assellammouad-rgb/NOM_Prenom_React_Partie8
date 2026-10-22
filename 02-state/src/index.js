import React from "react";
import ReactDOM from "react-dom/client";
import Message from "./components/Message";
import CompteurVisites from "./components/CompteurVisites";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Message />
    <CompteurVisites />
  </div>
);
