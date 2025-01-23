import { useState } from "react";
import styles from "./Flashcard.module.css";

function Flashcard({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false); //state

  function handleClick() {
    setShowAnswer(!showAnswer);
  }

  return (
    <div onClick={handleClick} className={styles.container}>
      <p className={styles.close_btn}>❌</p>
      <p className={styles.icon}>🤔</p>
      <p className={styles.cardtext}>{showAnswer ? answer : question}</p>
    </div>
  );
}

export default Flashcard;
