import Flashcard from "./Flashcard/Flashcard";
import styles from "./Flashcards.module.css";
import { useState } from "react";

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
    ];

    const [displayedQuestions, setDisplayedQuestions] = useState(data.slice(0, 3)); //will select first 3 questions
    
    function shuffleQuestions() {   //shuffles data randomly without modifying original array
        const shuffled = [...data].sort(() => Math.random() - 0.5);
        setDisplayedQuestions(shuffled.slice(0, 3));
    }

    return ( 
        <div className={styles.container}>
          {displayedQuestions.map((item, index) => (
            <Flashcard key={index} question={item.question} answer={item.answer} />
          ))}
            <button className={styles.btn} onClick={shuffleQuestions}>Shuffle Questions</button>
        </div>
      );
  
}

export default Flashcards;
  
// return (
//     <div className={styles.container}>
//       <Flashcard question={data[0].question} answer={data[0].answer} />
//       <Flashcard question={data[1].question} answer={data[1].answer} />
//       <Flashcard question={data[2].question} answer={data[2].answer} />
//       <Flashcard question={data[3].question} answer={data[3].answer} />
//       <Flashcard question={data[4].question} answer={data[4].answer} />
//       <Flashcard question={data[5].question} answer={data[5].answer} />
//       <Flashcard question={data[6].question} answer={data[6].answer} />
//       <Flashcard question={data[7].question} answer={data[7].answer} />
//       <Flashcard question={data[8].question} answer={data[8].answer} />
//       <Flashcard question={data[9].question} answer={data[9].answer} />
//     </div>
//   )