import React from 'react';
import './Home.css';
import BackgroundImage from './kanto-starters.png';
import Logo from './pokeball-logo.jpg';

class Home extends React.Component {
    render() {
        return (
            <div className="main">
                <Navigation/>
                <HeroContent/>
                <img className="background-image" src={BackgroundImage} alt={BackgroundImage}/>
            </div>
        );
    }
}

class Navigation extends React.Component {
    render() {
        return (
            <div className="navigation">
                <div className="logo">
                    <img src={Logo}/>
                    <div>Pokemon Database</div>
                </div>
                <div className="navigation-menu">
                    <ul>
                        <li>Home</li>
                        <li>Explore</li>
                        <li>Login</li>
                    </ul>
                </div>
            </div>
        );
    }
}

class HeroContent extends React.Component {
    render() {
        return (
            <div className="hero-container">
                <div class="hero-content">
                    <h1 className="hero-title">Welcome to the Pokemon Database</h1>
                    <p className="hero-subtext">The most comprehensive <br/>source for all things Pokemon</p>
                </div>
                <div className="hero-button-container">
                    <button className="hero-button">Explore</button>
                </div>
            </div>
        );
    }
}

export default Home;