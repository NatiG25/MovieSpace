const popup = document.createElement("section");

popup.innerHTML = (
  <main class="popup-container">
    <i class="fa-solid fa-x"></i>
    <div class="popup-headTitle">
      <img />
      <h2></h2>
      <p></p>
    </div>
    
    <section>
    <div class="displayComments"></div>
    </section>

    <section>
    <h2>Add a comment</h2>
    <form class="form">
              <input class="user" type="text" placeholder="Enter your name" required/> <br/>
              <textarea class="comment" placeholder="Add your comment here" required></textarea> <br/>
              <button class="submitBtn" type="submit">Comment</button>
              </form>
    </section>
  </main>
);

document.addEventListener('click', (event) => {
  if (event.target.className === 'fa-x') {
    popup.style.display = "none";
  }
})