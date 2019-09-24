import React from 'react';
import logo from './pokeball-icon.png';
import './Search.css';

class Search extends React.Component {
    render() {
        return (
            <div className="pokedex-search-container">
                <div className="search-component">
                    <img src={logo} alt={logo}/>
                    <input placeholder="Pokemon Number or Name" />
                    <button className="pokedex-search">Search</button>
                </div>
            </div>
        );
    }
}

export default Search;