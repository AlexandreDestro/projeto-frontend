import { createContext, useState } from "react";

type User = {
  id: number;
  username: string;
  email: string;
  name: string;
  
}

interface AuthenticationProps {
  user:  User | null,
  login (user: User ): void,
  logout(): void,
}

export const LoginContext = createContext<AuthenticationProps>({
  user: null, login: () => {}, logout: () => {} });

export function LoginProvider({ children }: { children: React.ReactNode}) {
  const emptyUser = {
    id: 0,
    username: '',
    name: '',
    email:''
  };
  const [user, setUserData] = useState<User>(emptyUser);

  function login(user: User) { console.log('entered'); setUserData(user); }

  function logout() { setUserData(emptyUser); }


  return (
    <LoginContext.Provider value={{ user, login, logout }}> 
        {children} 
    </LoginContext.Provider>
  );
}