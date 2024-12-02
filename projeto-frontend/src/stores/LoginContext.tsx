import { createContext, useState } from "react";

export const LoginContext = createContext({
  userData: null, login: (data) => {}, logout: () => {} });

export function LoginProvider({ children }) {
  const [userData, setUserData] = useState(null);

  function login(data) { setUserData(data); }

  function logout() { setUserData(null); }

  return (
    <LoginContext.Provider value={{ userData, login, logout }}> 
        {children} </LoginContext.Provider>
  );
}