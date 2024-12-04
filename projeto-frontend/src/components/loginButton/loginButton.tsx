import React from "react";
import styles from "./LoginButton.module.css";

const LoginButton: React.FC = () => {
  return (
    <div className={styles.loginContainer}>
      <button className={styles.loginButton}>
        <span className={styles.icon}>👤</span> Fazer login
      </button>
    </div>
  );
};

export default LoginButton;
