import './App.css';
import { useState } from 'react';

const App = () => {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  const questions = [
    {question: 'Question 1:What is machine learning?', answer: 'Answer 1: Machine learning is a subset of artificial intelligence that involves the development of algorithms and models that enable computers to learn from data and make predictions or decisions without being explicitly programmed.'},
    {question: 'Question 2: Explain the difference between supervised and unsupervised learning.', answer: 'Answer 2 : Supervised learning involves training a model on labeled data, where the correct output is provided, whereas unsupervised learning involves training on unlabeled data and the model finds patterns or structures within the data without explicit guidance.'},
    { question: 'Question 3: What is overfitting in the context of machine learning?', answer: 'Answer 3 : Overfitting occurs when a model learns the training data too well, capturing noise or random fluctuations in the data rather than the underlying patterns, leading to poor performance on new, unseen data.' }, { question: 'Question 4: Describe the concept of feature engineering.', answer: 'Answer 4: Feature engineering involves selecting, transforming, and creating features from raw data to improve the performance of machine learning algorithms. It aims to represent the data in a way that facilitates learning and enhances the predictive power of the model.' }, { question: 'Question 5: What is a neural network and how does it work?', answer: 'Answer 5: A neural network is a computational model inspired by the structure and function of the human brain. It consists of interconnected nodes (neurons) organized in layers. Each neuron receives input, performs a computation, and passes the output to the next layer. Through training, neural networks can learn complex patterns and relationships in data.' }, { question: 'Question 6: What are the different types of neural network architectures?', answer: 'Answer 6: Some common types of neural network architectures include feedforward neural networks, convolutional neural networks (CNNs), recurrent neural networks (RNNs), and deep neural networks (DNNs).' }, { question: 'Question 7: Explain the terms precision and recall in the context of classification algorithms.', answer: 'Answer 7: Precision is the ratio of true positive predictions to the total number of positive predictions made by a model, while recall is the ratio of true positive predictions to the total number of actual positive instances in the data.' }, { question: 'Question 8: What is cross-validation and why is it important in machine learning?', answer: 'Answer 8: Cross-validation is a technique used to assess the performance of a machine learning model by splitting the data into multiple subsets, training the model on some subsets, and evaluating it on the remaining subsets. It helps to estimate the model\'s performance on unseen data and detect overfitting.' }, { question: 'Question 9: Describe the process of hyperparameter tuning in machine learning.', answer: 'Answer 9: Hyperparameter tuning involves selecting the optimal hyperparameters for a machine learning model to improve its performance. This process often involves techniques such as grid search, random search, or more advanced optimization algorithms.' }, { question: 'Question 10: What is clustering, and what are some common clustering algorithms?', answer: 'Answer 10: Clustering is an unsupervised learning technique used to group similar data points together based on their features. Common clustering algorithms include K-means clustering, hierarchical clustering, and DBSCAN (Density-Based Spatial Clustering of Applications with Noise).' }
  ]

  const nextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1)
      setShowAnswer(false)
    }
  }

  const showAnswerHandler = () => {
    setShowAnswer(true)
  }


  return (
    <div className="App">
      <h1> Machine Leaning Flashcard</h1>
      <h2>There are 10 questions. Let's check them out! </h2>
      <div className ="card">
        <div className ="question"><h3>{questions[questionIndex].question}</h3>
     </div>
        <div className = "answer">
        <p>{questions[questionIndex].answer}</p>
        
        <button onClick={showAnswerHandler}>Show Answer</button>
        <button onClick={nextQuestion}>Next Question</button>

        </div>

      </div>
    </div>
  )
}

export default App