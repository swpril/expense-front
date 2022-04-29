import { createContext, ReactNode, useState } from 'react';

interface IAuthContext {
  login?: () => void;
  logout?: () => void;
  toggleAuthCard: () => void;
  isLoginPage: boolean;
}

export const AuthContext = createContext<IAuthContext>({
  login: () => {},
  logout: () => {},
  isLoginPage: false,
  toggleAuthCard: () => {}
});

export const AuthContextProvider = (props: { children: ReactNode }) => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const { children } = props;

  const loginPageHandler = () => setIsLoginPage(isLogin => !isLogin);

  const contextValue: IAuthContext = {
    isLoginPage,
    toggleAuthCard: loginPageHandler
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
