import { useEffect, useState } from "react";
import { getPokemon } from "./components/pokemon.js";

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
    setMemoryValues(shuffle(pokemonList));
  }
  function newPokemon() {
    const newPokemon = [];
    for (let i = 0; i < 12; i++) {
      while (true) {
        let randomNum = Math.floor((Math.random() * 1024) + 1);
        if (!newPokemon.includes(randomNum)) {
          newPokemon.push(randomNum);
          break;
        }
      }
    }
    setMemoryValues(newPokemon);
  }

  const [memoryValues, setMemoryValues] = useState([1,2,3,4,5,6,7,8,9,10,11,12]);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await Promise.all(
        memoryValues.map(id => getPokemon(id))
      );
      setPokemonList(data);
    }

    fetchData();
  }, [memoryValues]);

  const memoryButtons = pokemonList.map((pokemon) => 
    <button type="button" key={pokemon.id} onClick={() => makeGuess(pokemon.id)}>
      <img src={pokemon.image} className="pokemonImage"></img>
      <p>{pokemon.name}</p>
    </button>
  );

  const [guesses, setGuesses] = useState([]);

  return(<>
    <header>
      <h1>Memory Game</h1>
      <div>
        <p>Correct guesses: {guesses.length}/{memoryValues.length}</p>
        <button onClick={newPokemon}>New Pokemon?</button>
      </div>
    </header>
    <div id="game">
      {memoryButtons}
    </div>
    <footer>
      <p>Pokemon from <a href="https://pokeapi.co/">PokeAPI</a></p>
    </footer>
  </>);
}