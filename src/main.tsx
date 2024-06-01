import { RelayEnvironmentProvider } from "react-relay";
import createRelayEnvironment from "./RelayEnvironment";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./AuthContext.tsx";
import { ThemeProvider } from "./components/ThemeProvider.tsx";
import LoadingSpinner from "./components/Spinner.tsx";
import {
  ErrorContextProvider,
  useErrorContext,
} from "./components/ErrorProvider.tsx";
// import ErrorBoundary from "./ErrorBoundary.tsx";

const RelayApp: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { setError } = useErrorContext();
  const relayEnvironment = createRelayEnvironment(setError);

  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      {children}
    </RelayEnvironmentProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ErrorContextProvider>
    <RelayApp>
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
    </RelayApp>
  </ErrorContextProvider>
);
