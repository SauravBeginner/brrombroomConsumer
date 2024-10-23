import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import conf from "./conf/conf.js";

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={conf.googleCleintId}>
    <App />
  </GoogleOAuthProvider>
);
