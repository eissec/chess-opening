import React from 'react';
import Questions from "./QuestionsData";
import {CourseRecommendation} from "./CourseRecommendation";

export default ({question, setQuestion}) => {
	return <>
		<h1>{ question.Text }</h1>
		{ question.Answers && question.Answers.map(answer =>
			<button onClick={() => setQuestion(Questions[answer.LeadsTo])}>
				{ answer.Text }
			</button>
		) }
		{ question.Courses && question.Courses.map(recommendation =>
			<CourseRecommendation recommendation={recommendation} />
		) }
	</>;
}
