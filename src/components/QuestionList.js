import React, { useState, useEffect } from "react";
import QuestionList from "./QuestionList";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/questions-060")
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <QuestionList questions={questions} />
    </div>
  );
}
import { useState, useEffect } from 'react';

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('/questions')
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    fetch(`/questions/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        // Remove the deleted question from the state
        const updatedQuestions = questions.filter(question => question.id !== id);
        setQuestions(updatedQuestions);
      })
      .catch(error => console.error(error));
  };

  return (
    <>
      <h2>Questions</h2>
      <ul>
        {questions.map(question => (
          <li key={question.id}>
            <p>{question.prompt}</p>
            <ul>
              {question.answers.map((answer, index) => (
                <li key={index}>{answer}</li>
              ))}
            </ul>
            <button onClick={() => handleDelete(question.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
