import { retreiveData } from './involvementAPI.js';

const comments = document.querySelector('.comment-list');
const displayComments = async () => {
  const comment = await retreiveData();
  comment.forEach(function(commentItem) {
    console.log(commentItem.comment);
    const commentContainer = document.createElement('li');
    commentContainer.innerHTML = `
    <span id='comment-date'>${commentItem.creation_date}</span> - <span id='comment-user'>${commentItem.username}</span>
      <div id='comment-content'>${commentItem.comment}</div>
    `
    comments.appendChild(commentContainer);

  });
};

export default displayComments;
