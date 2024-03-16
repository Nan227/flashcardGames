import React from "react";
import CardgameForm from "./Components/CardgameForm";
import "./App.css";

function App() {
  return (
    <div className="title-container">
      <h1> Machine Leaning Flashcard</h1>
      <h2>There are 10 questions. Let's check them out! </h2>
      <CardgameForm />
    </div>
  );
}
export default App;