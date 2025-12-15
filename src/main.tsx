import { createRoot } from "react-dom/client";
import "./index.css";
import { pageview } from "./ga";
import App from "./App";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

if (typeof window !== "undefined") {
  const send = () =>
    pageview(window.location.pathname + window.location.search);
  send();
  window.addEventListener("load", send);
}
