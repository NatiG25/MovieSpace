const appId = 'GkH7NaZUGpE0nkgYlAMb';
const involvementApiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;
export const container = document.querySelector('.moviecards-container');

// add a like to a movie
export const addLike = async (itemId) => {
  fetch(involvementApiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: itemId }),
  });
};
// return a like
export const getLikes = async () => {
  const response = await fetch(involvementApiUrl);
  const likes = await response.json();
  return likes;
};

export const updateLikes = async (id) => {
  const likes = await getLikes();
  let results = 0;
  likes.forEach((e) => {
    if (e.item_id.toString() === id.toString()) {
      results = e.likes + 1;
    }
  });
  return results;
};

const moreLikes = (e) => {
  const number = e.innerText;
  e.innerText = parseInt(number, 10) + 1;
};

container.addEventListener('click', (e) => {
  if (e.target.className === 'fas fa-heart like') {
    const likeId = e.target.parentNode.querySelector('i').id;
    const like = e.target.parentNode.querySelector('i');
    updateLikes(likeId);
    addLike(likeId);
    moreLikes(like);
  }
});
