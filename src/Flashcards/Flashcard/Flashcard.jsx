import { useState } from "react";
import styles from "./Flashcard.module.css";

function Flashcard({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false); //state

  function handleClick() {
    setShowAnswer(!showAnswer);
  }

  return (
    <div
      onClick={handleClick}
      className={`${styles.container} ${showAnswer ? styles.answer : ""}`}
    >
      <p className={styles.close_btn}>❌</p>
      <p className={styles.icon}>{showAnswer ? "🤯" : "🤔"}</p>
      <p className={styles.cardtext}>{showAnswer ? answer : question}</p>
    </div>
  );
}

export default Flashcard;
