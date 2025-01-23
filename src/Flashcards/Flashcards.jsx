import Flashcard from "./Flashcard/Flashcard";
import styles from "./Flashcards.module.css";

function Flashcards() {
  const data = [
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
  ];

  return (
    <div className={styles.container}>
      <Flashcard question={data[0].question} answer={data[0].answer} />
      <Flashcard question={data[1].question} answer={data[1].answer} />
      <Flashcard question={data[2].question} answer={data[2].answer} />
    </div>
  );
}

export default Flashcards;
