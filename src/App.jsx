// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Header from "../src/Header/Header.jsx";
import Flashcards from "./Flashcards/Flashcards.jsx";
import Footer from "./Footer/Footer.jsx";
import Form from "./Form/Form.jsx";


function App() {
  return (
    <>
      <Header />
      <Form />
      <Flashcards />
      <Footer />
    </>
  );
}

export default App;
