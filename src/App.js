import './App.css';
import Questions from "./QuestionsData";
import {useState} from "react";
import Question from "./Question";
import { motion } from "framer-motion";

function App() {
	const [question, setQuestion] = useState(Questions.YouPlayAs);

  return (
    <div className="App">
			<motion.div
				key={question.Text}
				animate={{
					scale: [0.2, 1],
					opacity: ["0%", "100%"],
				}}
			>
				<Question question={question} setQuestion={setQuestion} />
			</motion.div>
    </div>
  );
}

export default App;
