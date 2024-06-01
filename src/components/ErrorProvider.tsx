import useContextWrapper from "@/hooks/useContextWrapper";
import React, { createContext, useMemo, useState } from "react";

interface IErrorContext {
  error: {
    code: number;
    message: string;
  } | null;
  setError: React.Dispatch<React.SetStateAction<IErrorContext["error"]>>;
}

export const ErrorContext = createContext<IErrorContext | null>(null);

export const useErrorContext = () => {
  return useContextWrapper(ErrorContext, {
    contextName: useErrorContext.name,
    providerName: ErrorContextProvider.name,
  });
};

export const ErrorContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [error, setError] = useState<IErrorContext["error"]>(null);

  const value = useMemo(() => ({ error, setError }), [error]);

  return (
    <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>
  );
};
