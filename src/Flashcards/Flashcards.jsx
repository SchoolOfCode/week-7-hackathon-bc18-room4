import Flashcard from "./Flashcard/Flashcard";
import Form from "../Form/Form";
import styles from "./Flashcards.module.css";

import { useState } from "react";

function Flashcards() {
  let [data, setData] = useState([
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
  ]);

  console.log(data);

  function handleFormData(formData) {
    let newData = [...data];
    newData.push(formData);
    setData(newData);
  }

  return (
    <div className={styles.container}>
      <Form callback={handleFormData} />
      {data.slice(0, 3).map((item, index) => (
        <Flashcard key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}

export default Flashcards;
