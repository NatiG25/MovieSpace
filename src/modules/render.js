import { updateLikes } from './getLikes.js';

const render = (data) => {
  const container = document.querySelector('.moviecards-container');
  data.forEach(async (e) => {
    const likes = await updateLikes(e.id);
    container.innerHTML += `<div class="card">
    <img class="card-img" src=${e.image.medium}>
  </div>
  <div class="movieName">
      <h3 class="title">${e.name}</h3>
      <p class="likes"> <i class="fas fa-heart like" id="${e.id}"> <span class="num"> ${likes} </span> </i></p>
      <button id="${e.id}" class="commentBtn" type="button">Comment</button>
  </div>`;
  });
};

export default render;
