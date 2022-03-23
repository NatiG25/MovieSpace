import { tvApiUrl } from "./apiCall.js";

// const movieData = async (movieID) => {
//   console.log(movieData());
//   const response = await get(`${tvApiUrl/movieID}`);
//   return response;
// }

// movieData().then((data) => {
//   console.log(data);
  
// })

const popupDisplay = (data) => {
  document.body.addEventListener('click', (event) => {
  if (event.target.className === 'commentBtn') {
    const popup = document.createElement("section");
    
    data.forEach((item) => {
      popup.innerHTML += `
    <main class="popup-container">
      <i class="fa-solid fa-x"></i>
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
  document.body.append('popup');
    });
  }
})
}

export { popupDisplay };