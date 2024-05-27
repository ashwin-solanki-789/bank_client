import { RelayEnvironmentProvider } from "react-relay";
import { RelayEnvironment } from "./RelayEnvironment";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./AuthContext.tsx";
import { ThemeProvider } from "./components/ThemeProvider.tsx";
import LoadingSpinner from "./components/Spinner.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <React.StrictMode>
      <React.Suspense fallback={<LoadingSpinner />}>
        <BrowserRouter>
          <UserContextProvider>
            <ThemeProvider defaultTheme="dark" storageKey="bank-ui-theme">
              <App />
            </ThemeProvider>
          </UserContextProvider>
        </BrowserRouter>
      </React.Suspense>
    </React.StrictMode>
  </RelayEnvironmentProvider>
);
