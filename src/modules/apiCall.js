const tvApiUrl = 'https://api.tvmaze.com/shows';

const getMovies = async () => {
  const response = await fetch(tvApiUrl);
  const films = await response.json();
  const data = films.slice(0, 20).map((item) => item);
  return data;
};
export default getMovies;