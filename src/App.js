import "./App.css";
import Questions from "./QuestionsData";
import { useState } from "react";
import Question from "./Question";
import { motion } from "framer-motion";

function App() {
  const [questionPath, setQuestionPath] = useState([Questions.YouPlayAs]);

  const moveToQuestion = (question) => {
    setQuestionPath([...questionPath, question]);
  };

  const goBack = () => {
    setQuestionPath(questionPath.slice(0, questionPath.length - 1));
  };

  const lastQuestion = questionPath[questionPath.length - 1];

  return (
    <div className="App">
      <motion.div
        key={lastQuestion.Text}
        animate={{
          scale: [0.2, 1],
          opacity: ["0%", "100%"],
        }}
      >
        <Question question={lastQuestion} setQuestion={moveToQuestion} />
      </motion.div>
      {questionPath.length > 1 && (
        <button className={"back-button"} onClick={goBack}>
          Back
        </button>
      )}
    </div>
  );
}

export default App;
