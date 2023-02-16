import logo from './logo.svg';
import './App.css';
import Questions from "./QuestionsData";
import {useState} from "react";
import Question from "./Question";

function App() {
	const [question, setQuestion] = useState(Questions.YouPlayAs);

  return (
    <div className="App">
			<Question question={question} setQuestion={setQuestion} />
    </div>
  );
}

export default App;
