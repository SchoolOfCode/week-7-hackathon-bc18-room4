import { useState } from "react";
import styles from "./Flashcard.module.css";

function Flashcard({ question, answer, resetTrigger }) {
  const [showAnswer, setShowAnswer] = useState(false); //state
  const [currentResetTrigger, setCurrentResetTrigger] = useState(resetTrigger);

  function handleClick() {
    setShowAnswer(!showAnswer);
  }

  if (resetTrigger !== currentResetTrigger) {
    setShowAnswer(false);
    setCurrentResetTrigger(resetTrigger);
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
