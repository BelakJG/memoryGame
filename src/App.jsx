import { useState } from "react";

export default function App() {
  function shuffle([array]) {
    for (let i = array.length - 1; i > 0; i--) {
      // Generate random index between 0 and i
      const j = Math.floor(Math.random() * (i + 1));
      // Swap elements array[i] and array[j]
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const memoryValues = [1,2,3,4,5,6,7,8,9,10,11,12];
  const [guesses, setGuesses] = useState([]);

  return(<>
    <header>
      <h1>Memory Game</h1>
      <p>Correct guesses: {guesses.length}/{memoryValues.length}</p>
    </header>
  </>);
}