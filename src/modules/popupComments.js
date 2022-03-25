import { addComment, getComment } from './commentAPI.js';
import { displayCommentCount } from './commentCounter.js';

const popup = document.createElement('section');

// DISPLAY POPUP
const popupDisplay = async (data) => {
  document.body.addEventListener('click', (event) => {
    if (event.target.className === 'commentBtn') {
      const commentId = event.target.parentNode.querySelector('button').id;

      data.forEach((item) => {
        if (item.id.toString() === commentId.toString()) {
          popup.innerHTML += `
    <main class="popup-container">
    <span><i class="fas fa-times" alt='#'></i></span>
        <img src="${item.image.original}" />

        <div class="popup-headTitle">
        <h2>${item.name}</h2>
        <p>${item.summary}</p>
      
      <section class="displayAllComments">
      <h2>Comments(<span id="totalCommentCount"></span>)</h2>
        <ul class="comment-ul">
        </ul>
      </section>
  
      <section class="comment-section">
      <h2>Add a comment</h2>
      <form class="form">
                <input class="user" type="text" placeholder="Enter your name" required/> <br/>
                <input class="comment" type="text" placeholder="Add your comment here" required/> <br/>
                <button id=${item.id} class="submitBtn" type="submit">Submit</button>
                </form>
      </section>
      </div>
    </main>
  `;
          document.body.prepend(popup);
          popup.style.display = ('block');
          document.body.style.overflowY = ('hidden');

          const closeBtn = document.querySelector('.fa-times');
          document.addEventListener('click', (event) => {
            if (event.target === closeBtn) {
              popup.style.display = 'none';
              document.body.style.overflowY = ('auto');
              window.location.reload();
            }
          });
        }
      });

      const submitBtn = document.querySelector('.submitBtn');
      const ulComments = document.querySelector('.comment-ul');
      const template = document.createElement('template');
      const user = document.querySelector('.user');
      const text = document.querySelector('.comment');

      // DISPLAY ALL COMMENTS
      const displayComment = async (commentId) => {
        const allComments = await getComment(commentId);

        allComments.forEach((comment) => {
          template.innerHTML += `
          <li>
          ${comment.creation_date} <br/> ${comment.username} : ${comment.comment}
          </li>
          `;
          ulComments.append(template.content);
        });
      };

      displayComment(commentId);

      // DISPLAY COMMENT COUNT
      const displayNumber = document.querySelector('#totalCommentCount');
      displayCommentCount(commentId, displayNumber);

      // GET USER INPUT
      const submitComment = () => {
        const comment = {
          username: user.value,
          comment: text.value,
          item_id: commentId,
        };

        addComment(comment);
      };

      // UPDATE COMMENTS
      const updateComments = () => {
        const li = document.createElement('li');
        const date = new Date();
        const day = date.getDay();
        const month = date.getMonth();
        const year = date.getFullYear();
        li.innerHTML += `
          <li class="userInput">
          ${year} ${-month} ${-day} </br> ${user.value} : ${text.value}
          </li>
          `;
        ulComments.append(li);
      };

      submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        submitComment();
        updateComments();
        displayCommentCount(commentId, displayNumber);

        user.value = '';
        text.value = '';
      });
    }
  });
};

export default popupDisplay;
