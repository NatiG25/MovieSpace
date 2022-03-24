const fetchMovieComments = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DI7eKxNz4tMHOe3Yq2L5/comments/';

const getComment = async (movieId) => {
  const response = await fetch(`${fetchMovieComments}?item_id=${movieId}`).catch((err) => err);
  const resJSON = response.json();
  return (resJSON);
};

// SEND COMMENT TO API
const addComment = async (comment) => {
  fetch(fetchMovieComments, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  });
};

export { getComment, addComment };