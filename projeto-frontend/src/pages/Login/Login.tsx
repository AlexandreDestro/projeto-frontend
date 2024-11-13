
import './Login.css';
import InputComponent from '../../components/Input/InputComponent';

function Login() {
  return (
    <div className="main">
      <div id="login-box">
        <div>
          <h3 id="login-label">Login</h3>

          <label htmlFor="username">Usuário</label>
            <InputComponent placeholder='Insira o usuário'/>

          <label htmlFor="password">Senha</label>
            <InputComponent placeholder='Insira a senha'/>
          <a className="botao-login" type="submit">
            Login
          </a>
        </div>
        <div>
          <p>Ainda não tem conta?</p>
          <button type="submit">cadastre-se</button>
        </div>
      </div>
    </div>
  
  );
}

export default Login;
