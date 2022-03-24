
const popup = document.createElement('section');

const fetchMovieComments = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DI7eKxNz4tMHOe3Yq2L5/comments/";

const getComment = async (movieId) => {
    const response = await fetch(`${fetchMovieComments}?item_id=${movieId}`).catch((err) => err);
    const resJSON = response.json();
    return (resJSON);
  };


const addComment = async (movieId) => {
  fetch(fetchMovieComments, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 
      item_id: movieId,
      username: username.value,
      comment: commentArea.value,
    }),
  });
};

const removePopup = () => {
  document.addEventListener('click', (event) => {
    if (event.target.className === 'fas') {
      popup.style.display = 'none';
      document.body.style.overflowY = ('none');
    }
  });
};


const popupDisplay = async (data) => {
  document.body.addEventListener('click', (event) => {
    if (event.target.className === 'commentBtn') {
      const commentId = event.target.parentNode.querySelector('button').id;

      data.forEach((item) => {
        if (item.id.toString() === commentId.toString()) {
          const submitComment = () => {
            alert(1);
            submitBtn.addEventListener('click', (e) => {
              e.preventDefault();
              const comment = {
                user: username.value,
                text: commentArea.value,
              }
          console.log(comment);
            });
          };
          
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
  
      <section>
      <h2>Add a comment</h2>
      <form class="form">
                <input class="user" type="text" placeholder="Enter your name" required/> <br/>
                <textarea class="comment" placeholder="Add your comment here" required></textarea> <br/>
                <button onclick="submitComment()" id=${item.id} class="submitBtn" type="submit">Submit</button>
                </form>
      </section>
    </main>
  `;
          document.body.style.overflowY = 'hidden';
          popup.style.display = 'block';
          document.body.prepend(popup);
          
        }
      });
    }
  });
};

const submitBtn = document.querySelector('.submitBtn');
const username = document.querySelector('.user');
const commentArea = document.querySelector('.comment');
console.log(submitBtn);



export default popupDisplay;
