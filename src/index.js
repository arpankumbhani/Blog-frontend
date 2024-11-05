import "react-app-polyfill/stable";
import "core-js";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import createStoreWithPersist from "./../src/store";

const { store, persistor } = createStoreWithPersist();

// store.subscribe(() => console.log(store.getState()));

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

reportWebVitals();
