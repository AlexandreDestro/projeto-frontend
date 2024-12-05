import React from 'react';
import styles from './LoginButton.module.css'; // Import correto do CSS Module

const LoginButton: React.FC = () => {
    const handleLoginClick = () => {
        console.log("Login button clicked");
        // Lógica para redirecionamento
    };

    return (
        <div className={styles.loginContainer}>
            <button
                className={styles.loginButton} // Referência ao estilo do CSS Module
                onClick={handleLoginClick}
            >
                Fazer Login
            </button>
        </div>
    );
};

export default LoginButton;
