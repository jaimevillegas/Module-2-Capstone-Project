import { retreiveData } from './involvementAPI.js';

const comments = document.querySelector('.comment-list');
const displayComments = async () => {
  const comment = await retreiveData();
  const commentObj = comment[0].comment;
  console.log('Im here bitch');
  console.log(comment);
  commentObj.foreach((commentary) => {
    console.log(commentary);
    const commentContainer = document.createElement('li');
    commentContainer.innerHTML = `${commentary.comment}`;
    comments.appendChild(commentContainer);
  });
};

export default displayComments;
