import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "App";
import { Amplify } from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);
const container = document.getElementById("app");
const root = ReactDOMClient.createRoot(container);
root.render(<App />);
