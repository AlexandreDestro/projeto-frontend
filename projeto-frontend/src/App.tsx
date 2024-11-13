//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css';

function App() {
  return (
    <>
      <div className="main">
        <div id="login-box">
          <div>
            <h3>Login</h3>
            <label htmlFor="username">Usuário</label>
            <input
              type="text"
              placeholder="Insira o usuário"
              name="username"
              required
            />
            <label htmlFor="password">Senha</label>
            <input
              type="text"
              placeholder="Insira a senha"
              name="password"
              required
            />
            <button type="submit">
              <b>Login</b>
            </button>
          </div>
          <div>
            <p>Ainda não tem conta?</p>
            <button type="submit">cadastre-se</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
