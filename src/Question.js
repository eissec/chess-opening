import React from "react";
import Questions from "./QuestionsData";
import { CourseRecommendation } from "./CourseRecommendation";

export default ({ question, setQuestion }) => {
  return (
    <>
      <h1>{question.Text}</h1>
      <div className="buttonBlock">
        {question.Answers &&
          question.Answers.map((answer) => (
            <button onClick={() => setQuestion(Questions[answer.LeadsTo])}>
              <img className="iconImg" src={answer.Icon} />
              {answer.Text}
            </button>
          ))}
        {question.Courses &&
          question.Courses.map((recommendation) => (
            <CourseRecommendation recommendation={recommendation} />
          ))}
      </div>
    </>
  );
};
