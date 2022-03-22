import './style.css';

const involvementApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/GkH7NaZUGpE0nkgYlAMb/likes/';
const tvApiUrl = 'https://api.tvmaze.com/schedule/full';

// fetch a movie
const getMovies = async () => {
  const response = await fetch(tvApiUrl);
  return response.json();
};

// add a like to a movie
const addLike = async (itemId) => {
  fetch(involvementApiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: itemId }),
  });
};
// return a like
const getLikes = async () => {
  const response = await fetch(involvementApiUrl, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

// dom

const movies = (data, like = {}) => `<div class="card">
                       <img class="card-img" src="${data.image.medium}">
                     </div>
                     <div class="movieName">
                         <h3 class="title"> ${data.name} </h3>
                         <p class="likes"> <i class="fas fa-heart like" data-id="${data.id}"> <span class="num"> ${like} </span> </i></p>
                     </div>`;

const movieAppend = async () => {
  const likes = await getLikes();
  const movieCard = await getMovies();
  movieCard.innerHTML = '';
  movieCard.innerHTML += movies;
};

movieAppend();
