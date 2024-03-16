import React, { useState } from 'react';
import "./CardgameForm.css";
import quiz from "./questionJson.json";

const CardgameForm = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(""); // State to store the selected option
  const [showResult, setShowResult] = useState(false); // State to control showing the result

  // Shuffle the options
  const shuffleArray = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  // Shuffle questions
  const shuffledQuestions = shuffleArray(quiz.questions);

  // Get the current question from the shuffled array
  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  // Function to handle option selection
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Function to check the answer
  const checkAnswer = () => {
    if (selectedOption === currentQuestion.correct_answer) {
      setShowResult(true); // If selected answer is correct, show the result
    } else {
      setShowResult(false); // If selected answer is incorrect, hide the result
    }
  };

  // Function to handle next question button click
  const nextQuestionHandler = () => {
    if (selectedOption !== "") {
      // Reset selected option and result display for the next question
      setSelectedOption("");
      setShowResult(false);

      // Move to the next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("Please select an option before moving to the next question.");
    }
  };

  return (
    <div className='quiz-container'>
      <h2>{currentQuestion.question}</h2>
      {
        currentQuestion.options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`option-${index}`}
              name="option"
              value={option}
              onChange={handleOptionChange}
              checked={selectedOption === option} // Check if this option is selected
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))
      }
      <button onClick={checkAnswer}>Check Answer</button>
      {showResult && <div>{selectedOption === currentQuestion.correct_answer ? 'Correct choice' : 'Incorrect choice'}</div>}
      <button onClick={nextQuestionHandler}>Next Question</button>
    </div>
  );
};

export default CardgameForm;
