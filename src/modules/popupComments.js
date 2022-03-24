import { addComment, getComment } from './commentAPI.js';

const popup = document.createElement('section');

// DISPLAY POPUP
const popupDisplay = async (data) => {
  document.body.addEventListener('click', (event) => {
    if (event.target.className === 'commentBtn') {
      const commentId = event.target.parentNode.querySelector('button').id;

      const displayComment = async (commentId) => {
        const allComments = await getComment(commentId);

        allComments.forEach((comment) => {
          const template = document.createElement('template');
          template.innerHTML += `
          <li>
          ${comment.creation_date} <br/> ${comment.username} : ${comment.comment}
          </li>
          `;
          const ulComments = document.querySelector('.comment-ul');
          ulComments.append(template.content);
        });
      };

      displayComment(commentId);

      data.forEach((item) => {
        if (item.id.toString() === commentId.toString()) {
          popup.innerHTML += `
    <main class="popup-container">
    <span><i class="fas fa-times" alt='#'></i></span>
      <div class="popup-headTitle">
        <img src="${item.image.medium}" />
        <h2>${item.name}</h2>
        <p>${item.summary}</p>
      </div>
      
      <section class="displayAllComments">
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
    </main>
  `;
          document.body.style.overflowY = 'hidden';
          popup.style.display = 'block';
          document.body.prepend(popup);
        }
      });

      const submitBtn = document.querySelector('.submitBtn');

      // GET USER INPUT
      const submitComment = (e) => {
        e.preventDefault();
        const user = document.querySelector('.user');
        const text = document.querySelector('.comment');

        const comment = {
          username: user.value,
          comment: text.value,
          item_id: commentId,
        };

        addComment(comment);

        user.value = '';
        text.value = '';
      };

      submitBtn.addEventListener('click', submitComment);
    }
  });
};

export default popupDisplay;
