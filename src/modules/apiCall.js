export const tvApiUrl = 'https://api.tvmaze.com/shows';

// fetch a movie
const getMovies = async () => {
  const response = await fetch(tvApiUrl);
  const data = await response.json();
  return data;
};

export default getMovies;