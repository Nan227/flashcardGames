import React, { useState } from 'react';
import UserChoice from './Components/UserChoice'; // corrected import path
import "./CardgameForm.css"; // corrected import path

const CardgameForm = () => {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [selectedOption, setSelectedOption] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  // update 10 questions
  const questions = [
    { question: "What is the primary goal of supervised learning?",
    options: [
      "A) To classify unlabeled data",
      "B) To predict output based on input data",
      "C) To discover patterns in unlabeled data",
      "D) To optimize system parameters"], 
      correct_answer : "B) To predict output based on input data"},
    {
      question: "Which algorithm is commonly used for binary classification tasks?",
      options: [
        "A) K-means clustering",
        "B) Decision trees",
        "C) Support Vector Machines (SVM)",
        "D) Apriori algorithm"
      ],
      correct_answer: "C) Support Vector Machines (SVM)"
    },
    {
      question: "What does the term 'overfitting' refer to in machine learning?",
      options: [
        "A) The model performs well on unseen data",
        "B) The model fails to capture underlying patterns in the data",
        "C) The model is too complex and fits the training data too closely",
        "D) The model is too simple and fails to capture complex patterns"
      ],
      correct_answer: "C) The model is too complex and fits the training data too closely"
    },
    {
      question: "Which of the following evaluation metrics is appropriate for a regression problem?",
      options: [
        "A) Accuracy",
        "B) Precision",
        "C) Mean Squared Error (MSE)",
        "D) F1-score"
      ],
      correct_answer: "C) Mean Squared Error (MSE)"
    },
    {
      question: "What does the term 'feature engineering' involve in machine learning?",
      options: [
        "A) Automating the process of feature selection",
        "B) Manipulating raw data to create new features that improve model performance",
        "C) Scaling features to a similar range",
        "D) Removing irrelevant features from the dataset"
      ],
      correct_answer: "B) Manipulating raw data to create new features that improve model performance"
    },
    {
      question: "Which technique is used to handle missing data in a dataset?",
      options: [
        "A) Removing rows with missing data",
        "B) Replacing missing values with the median of the feature",
        "C) Replacing missing values with the mean of the feature",
        "D) All of the above"
      ],
      correct_answer: "D) All of the above"
    },
    {
      question: "Which type of learning algorithm does not require labeled output data during training?",
      options: [
        "A) Supervised learning",
        "B) Unsupervised learning",
        "C) Semi-supervised learning",
        "D) Reinforcement learning"
      ],
      correct_answer: "B) Unsupervised learning"
    },
    {
      question: "What is the purpose of the activation function in a neural network?",
      options: [
        "A) To define the number of layers in the network",
        "B) To compute the loss function",
        "C) To introduce non-linearity to the network",
        "D) To initialize the weights of the network"
      ],
      correct_answer: "C) To introduce non-linearity to the network"
    },
    {
      question: "Which algorithm is commonly used for time series forecasting?",
      options: [
        "A) K-nearest neighbors (KNN)",
        "B) Random Forest",
        "C) Long Short-Term Memory (LSTM)",
        "D) Principal Component Analysis (PCA)"
      ],
      correct_answer: "C) Long Short-Term Memory (LSTM)"
    },
    {
      question: "What is the objective of unsupervised learning?",
      options: [
        "A) To predict output based on input data",
        "B) To discover patterns in unlabeled data",
        "C) To classify input data into predefined categories",
        "D) To optimize system parameters"
      ],
      correct_answer: "B) To discover patterns in unlabeled data"
    }
  ];

  // shuffle the questions

  const nextQuestion = () => {
    let randomQuestionIndex = Math.floor(Math.random() * questions.length);
    setQuestionIndex(randomQuestionIndex);
    setShowAnswer(false);
  };

  let score = 0;

  const handleNextQuestion = () => {
    if (selectedOption === questions[questionIndex].correct_answer) {
      setShowAnswer(true);
      score++; // Increment score if answer is correct
    }
    setSelectedOption("");
    nextQuestion();
  };

  return (
    <div>
      {showAnswer ? (
        <div>Correct Answer!</div>
      ) : (
        <div>
          <h3>{questions[questionIndex].question}</h3>
          <UserChoice
            handleChange={handleOptionChange}
            label="option"
            choices={questions[questionIndex].options}
            checked={selectedOption}
          />
          <button onClick={handleNextQuestion}>Next</button>
        </div>
      )}
    </div>
  );
};

export default CardgameForm;