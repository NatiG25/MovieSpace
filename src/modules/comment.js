// const username = document.querySelector('.user');
// const commentArea = document.querySelector('.comment');

// const commentPOST = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eI5R14OL1AS8fWw5Kmjy/comments';
// const commentGET = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eI5R14OL1AS8fWw5Kmjy/comments?item_id=item1';

// // Send data to API
// const sendComment = async (itemId) => {
//   const settings = {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//     body: JSON.stringify({
//       item_id: itemId,
//       username: username.value,
//       comment: commentArea.value,
//     }),
//   };

//   username.value = '';

//   try {
//     const fetchRes = fetch(commentPOST, settings);
//     const resPOST = await fetchRes.json();
//     return resPOST;
//   } catch (error) {
//     return error;
//   }
// };

// // Get data from API
// const getComment = async () => {
//   const resGET = await fetch(commentGET);
//   const resJSON = await resGET.json();
//   return resJSON;
// };

// export { sendComment, getComment };

