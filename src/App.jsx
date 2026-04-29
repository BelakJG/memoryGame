import { useState } from "react";

import "./styles/app.css";

export default function App() {
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      // Generate random index between 0 and i
      const j = Math.floor(Math.random() * (i + 1));
      // Swap elements array[i] and array[j]
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function makeGuess(num) {
    if (!guesses.includes(num)) {
      setGuesses([...guesses, num]);
    } else {
      setGuesses([]);
    }
    setMemoryValues(shuffle(memoryValues));
  }

  const [memoryValues, setMemoryValues] = useState([1,2,3,4,5,6,7,8,9,10,11,12]);
  const memoryButtons = memoryValues.map((num) => 
    <button type="button" key={num} onClick={() => makeGuess(num)}>
      {num}
    </button>
  );

  const [guesses, setGuesses] = useState([]);

  return(<>
    <header>
      <h1>Memory Game</h1>
      <p>Correct guesses: {guesses.length}/{memoryValues.length}</p>
    </header>
    <div id="game">
      {memoryButtons}
    </div>
  </>);
}