import './style.css';

import getMovies from './modules/apiCall.js';
import render from './modules/render.js';
import popupDisplay from './modules/popupComment.js';
import { getComment } from './modules/comment.js';

const commentBtn = document.querySelector('.commentBtn');

const movieAppend = async () => {
  const movieCard = await getMovies();
  render(movieCard);
};

movieAppend();

commentBtn.addEventListener('click', () => {
    console.log(getComment());
    popupDisplay();
})