import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
createRoot(document.getElementById("root")).render(
  // StrictMode能帮助暴露某些React代码中的潜在问题
  <StrictMode>
    <App />
  </StrictMode>,
);
