import React from 'react';

class Pokemon extends React.Component {
    render() {
        return (
            <div class="pokedex-item">
                <img src={this.props.pokemon.imageUrl} alt={this.props.name}/>
                <div className="poke-id">{this.props.pokemon.id}</div>
                <div className="poke-name">{this.props.pokemon.name}</div>
            </div>
        );
    }
}

export default Pokemon;