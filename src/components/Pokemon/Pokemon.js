import React from 'react';
import './Pokemon.css';

class Pokemon extends React.Component {
    render() {
        return (
            <div className="pokedex-item">
                <div className="pokedex-image">
                    <img src={this.props.pokemon.imageUrl} alt={this.props.name}/>
                </div>
                <div className="pokedex-info">
                    <div className="poke-id">{this.props.pokemon.id}</div>
                    <div className="poke-name">{this.props.pokemon.name}</div>
                </div>
            </div>
        );
    }
}

export default Pokemon;