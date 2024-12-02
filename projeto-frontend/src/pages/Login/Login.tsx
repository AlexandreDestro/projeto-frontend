import React, { useState, useContext } from "react";
import { LoginContext } from "../../stores/LoginContext";
import { testLogin } from "../../actions/Login";

import "./Login.css";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

function Login() {
  const { login } = useContext(LoginContext);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>('');

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    if (username === '' || password === '' ) { setError('Ambos os campos são obrigatórios!');
    } else { setError(''); }

    try {
      if (username !== '' || password !== '') { 
        const userData = await testLogin(username, password);
        login(userData);
      }
    } catch {
      setError("Não foi possível fazer login, verifique seu usuário e senha.");
    }
  };

  return (
    <>
      <div className="login_center">
      <Container maxWidth="xs">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 3 }}>
        <Typography variant="h5" gutterBottom> Login </Typography>
        <form onSubmit={handleLogin} style={{ width: '100%' }}>
          <TextField label="Username" variant="outlined" fullWidth margin="normal" name='username' value={username}
            onChange={(e) => setUsername(e.target.value)} />
          <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" value={password} name='password'
            onChange={(e) => setPassword(e.target.value)} />
          {error && <Typography color="error">{error}</Typography>}
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}> Login </Button>
        </form>
      </Box>
      </Container>
      </div>
    </>
  );
}

export default Login;
