import { tvApiUrl } from "./apiCall.js";
import { getComment, sendComment } from "./comment.js";

// const movieData = async (movieID) => {
//   console.log(movieData());
//   const response = await get(`${tvApiUrl/movieID}`);
//   return response;
// }

// movieData().then((data) => {
//   console.log(data);

// })
const username = document.querySelector(".user");
const commentArea = document.querySelector(".comment");

const popup = document.createElement("section");

const popupDisplay = async (data) => {
  document.body.addEventListener("click", (event) => {
    if (event.target.className === "commentBtn") {
      const commentId = event.target.parentNode.querySelector("button").id;
      const submitBtn = document.querySelector('.submitBtn');

      data.forEach((item) => {
        if (item.id.toString() === commentId.toString()) {

          popup.innerHTML += `
    <main class="popup-container">
    <span class="xMark"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg></span>
      <div class="popup-headTitle">
        <img src="${item.image.medium}" />
        <h2>${item.name}</h2>
        <p>${item.summary}</p>
      </div>
      
      <section>
      <div class="displayComments"></div>
      </section>
  
      <section>
      <h2>Add a comment</h2>
      <form class="form">
                <input class="user" type="text" placeholder="Enter your name" required/> <br/>
                <textarea class="comment" placeholder="Add your comment here" required></textarea> <br/>
                <button class="submitBtn" type="submit">Submit</button>
                </form>
      </section>
    </main>
  `;
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    sendComment(item.id.toString());
  });
          document.body.style.overflowY = "hidden";
          popup.style.display = "block";
          document.body.prepend(popup);
        }
      });
    }
  });
};




export { popupDisplay, username, commentArea };
