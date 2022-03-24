import { sendComment } from "./comment.js";

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
    <div class="xMark"><i id="closeBtn" class="fas fa-times" alt='#'></i>div>
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
//   submitBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     sendComment(item.id.toString());
//   });
          document.body.style.overflowY = "hidden";
          popup.style.display = "block";
          document.body.prepend(popup);
        }
      });
    }
  });
};




export { popupDisplay, username, commentArea };
