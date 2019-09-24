import React from 'react';
import Home from './components/Home/Home';
import PokemonModel from './models/PokemonModel';
import Pokemon from './components/Pokemon/Pokemon';
import Search from './components/Search/Search';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = { pokemon: []};
  }

  componentDidMount() {
    this.getPokemonData();
  }

  getPokemonData() {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
    .then(res => res.json())
    .then((data) => {
      let incrementId = 1;
      let pokemonArray = data.results.map(function(item) {

        let pokemonId;

        if (incrementId < 10) 
          pokemonId = `00${incrementId}`;
        else if (incrementId >= 10 && incrementId < 100) 
          pokemonId = `0${incrementId}`;
        else 
          pokemonId = incrementId;

        let imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonId}.png`;
        let pokemon = new PokemonModel(pokemonId, item.name, imageUrl);
        incrementId++;

        return pokemon;
      });

      this.updatePokemonState(pokemonArray);
    })
    .catch(console.log)
  }

  updatePokemonState(pokemonArray) {
    this.setState({ pokemon: pokemonArray });
  }

  render() {
    let pokeArray = this.state.pokemon;
    pokeArray = pokeArray.filter(i => i.id <= 10);

    return (
      <div className="app">
        <Home/>
        <Search/>
        <div className="poke-list">
          { pokeArray.map(poke => <Pokemon pokemon={poke}/>) }
        </div>
        <div className="load-more-container">
          <a className="load-more-btn">Load More</a>
        </div>
      </div>
    );
  }
}

export default App;
