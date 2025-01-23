
import reactLogo from '../assets/react.svg';
import styles from "./Header.module.css";

function Header() {
    return <div className= { styles.header }>
        <img src={reactLogo} className={styles.logo} />
        <h1> React Flashcards </h1>
        <p>🧠 Expand Your React Knowledge, One Flashcard at a Time! 🐌 </p>
    </div>
};

export default Header;

//logo
//header
//p tag