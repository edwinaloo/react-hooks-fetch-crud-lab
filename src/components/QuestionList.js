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

export default App;
