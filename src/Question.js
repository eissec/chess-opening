import React from "react";
import Questions from "./QuestionsData";

export default ({ question, setQuestion }) => {
  return (
    <>
      <h1>{question.Text}</h1>
      <div className="buttonBlock">
        {question.Answers &&
          question.Answers.map((answer) => (
            <button onClick={() => setQuestion(Questions[answer.LeadsTo])}>
              {answer.Text}
            </button>
          ))}
      </div>
    </>
  );
};
