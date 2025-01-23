import { useState } from "react";
import styles from "./Form.module.css";

function Form({ callback }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  function handleButton(event) {
    let data = {};
    event.preventDefault();
    data = {
      question,
      answer,
    };
    callback(data);
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleButton}>
        <label className={styles.label}>
          Question:
          <input
            className={styles.input}
            type="text"
            value={question}
            name="question"
            onChange={(e) => setQuestion(e.target.value)}
          />
        </label>
        <label className={styles.label}>
          Answer:
          <input
            className={styles.input}
            type="text"
            value={answer}
            name="answer"
            onChange={(e) => setAnswer(e.target.value)}
          />
        </label>
        <button className={styles.button} type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;
