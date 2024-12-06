import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import do useNavigate
import styles from './LoginButton.module.css'; // Import correto do CSS Module

const LoginButton: React.FC = () => {
    const navigate = useNavigate(); // Hook para redirecionar

    const handleLoginClick = () => {
        console.log("Login button clicked");
        navigate('/login'); // Redireciona para a rota de login

    };

    return (
        <div className={styles.loginContainer}>
            <button
                className={styles.loginButton}
                onClick={handleLoginClick}
            >
                Fazer Login
            </button>
        </div>
    );
};

export default LoginButton;
