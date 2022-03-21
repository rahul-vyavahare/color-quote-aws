import ReactDOM from "react-dom";
import { AppProvider } from "@shopify/polaris";
import en from "@shopify/polaris/locales/en.json";
import "@shopify/polaris/build/esm/styles.css";

import App from "./App";

ReactDOM.render(
    <AppProvider i18n={en}>
        <App />
    </AppProvider>,
    document.getElementById("root")
);
