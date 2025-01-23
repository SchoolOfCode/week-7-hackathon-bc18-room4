import Flashcard from "./Flashcard/Flashcard";
import Form from "../Form/Form";
import styles from "./Flashcards.module.css";
import { useState } from "react";

function Flashcards() {
  const [data, setData] = useState([
    {
      question: "What is react?",
      answer: "It is a Front end Library",
    },
    {
      question: "What is JSX?",
      answer:
        "JSX (JavaScript XML) is a syntax extension for JavaScript used in React.",
    },
    {
      question: "How do you create a React component?",
      answer: "function MyComponent() { return <h1>Hello, world!</h1>; }",
    },
    {
      question: "How do you pass data between React components?",
      answer: "Use props to pass data from a parent to a child.",
    },
    {
      question: "How do you handle events in React?",
      answer: "Add an event handler like onClick to a JSX element.",
    },
    {
      question: "How do you conditionally render in React?",
      answer: "Use a ternary operator or logical expressions.",
    },
    {
      question: "How do you update state in React?",
      answer: "Use the setter function from useState, like setState().",
    },
    {
      question: "How do you add default props to a React component?",
      answer: "Use Component.defaultProps to set default values.",
    },
    {
      question: "How do you share state between React components?",
      answer: "Lift the state to a common parent and pass it via props.",
    },
  ]);

  const [displayedQuestions, setDisplayedQuestions] = useState(
    data.slice(0, 3)
  ); // Initialize with first 3 questions
  const [resetTrigger, setResetTrigger] = useState(false);

  function handleFormData(formData) {
    const newData = [...data, formData];
    setData(newData);
  }

  function shuffleQuestions(dataArray) {
    const shuffled = [...dataArray].sort(() => Math.random() - 0.5);
    setDisplayedQuestions(shuffled.slice(0, 3));
    setResetTrigger((prev) => !prev);
  }

  return (
    <div className={styles.outercontainer}>
      <div className={styles.question_container}>
        <Form callback={handleFormData} />
      </div>
      <div className={styles.container}>
        {displayedQuestions.map((item, index) => (
          <Flashcard
            key={index}
            question={item.question}
            answer={item.answer}
            resetTrigger={resetTrigger}
          />
        ))}
        <button className={styles.btn} onClick={() => shuffleQuestions(data)}>
          Shuffle Questions
        </button>
      </div>
    </div>
  );
}

export default Flashcards;
