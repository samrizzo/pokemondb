import React from 'react';
import Home from './components/Home/Home';
import PokemonModel from './models/PokemonModel';
import Pokemon from './components/Pokemon/Pokemon';
import Search from './components/Search/Search';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { pokemon: [], numberOfItemsShown: 10};
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

  loadMore = (state) => {
    let pokemonArrayLength = this.state.pokemon.length;
    let itemsShown = this.state.numberOfItemsShown + 10 > pokemonArrayLength ? pokemonArrayLength : this.state.numberOfItemsShown + 10;

    if (itemsShown === this.state.pokemon.length) {
      let loadButton = document.getElementById('load-button');
      loadButton.style.display = 'none';
    }

    this.setState({ numberOfItemsShown: itemsShown });
  }

  updatePokemonState(pokemonArray) {
    this.setState({ pokemon: pokemonArray });
  }

  render() {

    let pokeArray = this.state.pokemon;
    pokeArray = pokeArray.filter(i => i.id <= this.state.numberOfItemsShown);

    return (
      <div className="app">
        <Home/>
        <Search/>
        <div className="poke-list" id="poke-list">
          { pokeArray.map(poke => <Pokemon key={poke.id} pokemon={poke}/>) }
        </div>
        <div className="loading-container">
            <button className="load-button" id="load-button" onClick={this.loadMore}>Load More</button>
        </div>
      </div>
    );
  }
}

export default App;
