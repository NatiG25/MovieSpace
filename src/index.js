import './style.css';

import getMovies from './modules/apiCall.js';
import render from './modules/render.js';

const movieAppend = async () => {
  const movieCard = await getMovies();
  render(movieCard);
};

movieAppend();
