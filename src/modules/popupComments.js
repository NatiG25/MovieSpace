const popup = document.createElement('section');

const fetchMovieComments = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DI7eKxNz4tMHOe3Yq2L5/comments/';

const popupDisplay = async (data) => {
  document.body.addEventListener('click', (event) => {
    if (event.target.className === 'commentBtn') {
      const commentId = event.target.parentNode.querySelector('button').id;

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
      
      <section>
      <div class="displayComments"></div>
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
