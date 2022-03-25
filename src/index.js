import './style.css';
import './modules/asset/logo.svg';
import getMovies from './modules/apiCall.js';
import render from './modules/render.js';
import popupDisplay from './modules/popupComments.js';
import displaymoviescount from './modules/moviecounter.js';

const movieAppend = async () => {
  const movieCard = await getMovies();
  render(movieCard);
};

movieAppend();

const moviepop = async () => {
  const movieCard = await getMovies();
  popupDisplay(movieCard);
};

moviepop();

displaymoviescount();
