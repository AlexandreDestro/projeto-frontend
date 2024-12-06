import { createContext, useState } from "react";

type User = {
  id: number;
  username: string;
  password: string;
  email: string;
}

const emptyUser = {
  id: 0,
  username: '',
  password: '',
  email: '',
};

interface AuthenticationProps {
  user:  User,
  login (user: User ): void,
  logout(): void,
}

export const LoginContext = createContext<AuthenticationProps>({
  user: emptyUser, login: () => {}, logout: () => {} });

export function LoginProvider({ children }: { children: React.ReactNode}) {
  
  const [user, setUserData] = useState<User>(emptyUser);

  function login(user: User) { setUserData(user); }

  function logout() { setUserData(emptyUser); }

  return (
    <LoginContext.Provider value={{ user, login, logout }}> 
        {children} 
    </LoginContext.Provider>
  );
}