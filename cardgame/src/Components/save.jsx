return (
  <div>
    {showResult ? (
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


export default CardgameForm;