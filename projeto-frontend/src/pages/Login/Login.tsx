import React, { useState, useContext } from "react";
import { LoginContext } from "../../stores/LoginContext";

import "./Login.css";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

import users from '../../data/user.json';

type User = {
  id: number;
  username: string;
  password: string;
  email: string;
}

const emptyUser: User = {
  id: 0,
  username: '',
  password: '',
  email: '',
}


function Login() {
  const { login } = useContext(LoginContext);
  const [error, setError] = useState<string>('');
  const [userDto, setUserDto] = useState<User>(emptyUser);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserDto((prev) => ({
      ...prev,
      [name]: value, // Dynamically updates the state based on the `name` attribute
    }));
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (userDto.username === '' || userDto.password === '' ) {
      setUserDto(emptyUser); 
      setError('Ambos os campos são obrigatórios!');
    } else {
      const matchedUser: User | undefined = users.find(
        (user) => userDto.username === user.username && userDto.password === user.password
      );
  
      if(matchedUser){
        login(matchedUser);
      }else{
        setUserDto(emptyUser);
        setError('Verifique seu usuário e senha!');
      }
    }
  };

  return (
    <div className="login_center">
      <Container maxWidth="xs">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 3 }}>
          <Typography variant="h5" gutterBottom> Login </Typography>
          <form onSubmit={submitForm} style={{ width: '100%' }}>
            <TextField label="Username" variant="outlined" fullWidth margin="normal" name='username' value={userDto.username}
              onChange={handleInputChange} />
            <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" name='password' value={userDto.password}
              onChange={handleInputChange} />
            {error && <Typography color="error">{error}</Typography>}
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}> Login </Button>
          </form>
        </Box>
      </Container>
    </div> 
  );
}

export default Login;
