import React, { createContext, useMemo, useState } from "react";
import useContextWrapper from "./hooks/useContextWrapper";
interface IUserContext {
  user: {
    id: number;
    firstName: string;
    tax_id: string;
    isValid: boolean;
  };
  setUser: React.Dispatch<React.SetStateAction<IUserContext["user"]>>;
}

export const UserContext = createContext<IUserContext | null>(null);

export const useUserContext = () => {
  return useContextWrapper(UserContext, {
    contextName: useUserContext.name,
    providerName: UserContextProvider.name,
  });
};

export const UserContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = useState<IUserContext["user"]>({
    id: 0,
    firstName: "",
    tax_id: "",
    isValid: false,
  });

  const value = useMemo(() => ({ user, setUser }), [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
