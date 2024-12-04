import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © {new Date().getFullYear()} Meu Site. Todos os direitos reservados.
        </p>
        <nav className={styles.nav}>
          <a href="/sobre" className={styles.link}>
            Sobre
          </a>
          <a href="/contato" className={styles.link}>
            Contato
          </a>
          <a href="/politica-de-privacidade" className={styles.link}>
            Política de Privacidade
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
