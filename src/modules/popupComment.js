import { container } from "./getLikes.js";
import { getComment } from "./comment.js";

const popup = document.createElement("section");
const popupDisplay = () => {
  popup.innerHTML = `
  <main class="popup-container">
    <i class="fa-solid fa-x"></i>
    <div class="popup-headTitle">
      <img />
      <h2></h2>
      <p></p>
    </div>
    
    <section>
    <div class="displayComments">${getComment()}</div>
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
popup.style.display = ('block');
container.prepend(popup);
}


document.addEventListener('click', (event) => {
  if (event.target.className === 'fa-x') {
    popup.style.display = "none";
  }
})

export default popupDisplay;