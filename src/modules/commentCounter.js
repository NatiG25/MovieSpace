import { getComment } from './commentAPI.js';

const countComments = (list) => list.length;

const displayCommentCount = async (commentId, displayNumber) => {
  const comments = await getComment(commentId);
  if (countComments(comments)) displayNumber.innerHTML = (`${countComments(comments)}`);
};

export default displayCommentCount;