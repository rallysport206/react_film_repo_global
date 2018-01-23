import React, { Component } from 'react';
import FilmListing from './FilmListing.js';
import FilmDetails from './FilmDetails.js';
import './App.css';
import TMDB from './TMDB.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      movieData: {}
    }
  }
  handleClick = (data) =>{
    const url = `https://api.themoviedb.org/3/movie/${data}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
    console.log(data);
    fetch(url).then(response => {
      response.json().then(data => {
        this.setState({movieData: data});
      });
    });
  }
  render() {
    return (
      <div className="App">
        <div className="film-library">
            <FilmListing films={TMDB.films} />
            <FilmDetails films={TMDB.films} />
            <FilmDetails />
        </div>
      </div>
    );
  }
}

export default App;
