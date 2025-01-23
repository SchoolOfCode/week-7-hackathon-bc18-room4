import reactLogo from "../assets/react.svg";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Built with React</p>
      <img className={styles.logo} src={reactLogo} />
    </div>
  );
}

export default Footer;
