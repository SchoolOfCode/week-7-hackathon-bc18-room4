import styles from './Form.module.css';

function Form() {

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        console.log("Form submitted");
       const formValues = {
        question: questionRef.current.value
        answer: nameRef.current.value
       }
        console.log(data.get('question'));
        console.log(data.get('answer'));
    }

  return (
    <div className={styles.container}>
    <form>
      <label>
        Question:
        <input type="text" question="question" />
      </label>
      <label>
        Answer:
        <input type="text" name="answer" />
      </label>
      <button type="submit" onClick={handleSubmit} >Submit</button>
    </form>
    </div>
  );
}

export default Form;