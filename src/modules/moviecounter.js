import getMovies from './apiCall.js';

const moviescount = (list) => list.length;
const displayNumber = document.getElementById('totalMovieCount');

const displaymoviescount = async () => {
  const movies = await getMovies();
  displayNumber.textContent = `(${moviescount(movies)})`;
};

export default displaymoviescount;