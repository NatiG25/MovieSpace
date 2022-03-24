import './style.css';
import './modules/logo.png';
import getMovies from './modules/apiCall.js';
import render from './modules/render.js';
import popupDisplay from './modules/popupComments.js';
import displaymoviescount from './modules/moviecounter';


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
