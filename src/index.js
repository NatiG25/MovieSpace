import './style.css';
import './modules/logo.png';
import getMovies from './modules/apiCall.js';
import render from './modules/render.js';
import displaymoviescount from './modules/moviecounter';

const movieAppend = async () => {
  const movieCard = await getMovies();
  render(movieCard);
};

movieAppend();
displaymoviescount();
