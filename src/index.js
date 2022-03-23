import './style.css';

import getMovies from './modules/apiCall.js';
import render from './modules/render.js';
import { popupDisplay } from './modules/popupComment.js'

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