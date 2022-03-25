import getMovies from './apiCall.js';
import moviescount from './count.js';

const displayNumber = document.getElementById('totalMovieCount');
const displaymoviescount = async () => {
  const movies = await getMovies();
  displayNumber.textContent = `(${moviescount(movies)})`;
};

export default displaymoviescount;