import { retreiveData, submitComment } from './involvementAPI.js';

const comments = document.querySelector('.comment-list');
const commentsNumber = document.querySelector('.comments-number');
const inputUsername = document.getElementById('input-username');
const publishCommentButton = document.getElementById('publish-comment-button');
const inputDescription = document.getElementById('input-description');

const displayComments = async () => {
  const comment = await retreiveData();
  comments.innerHTML = '';
  commentsNumber.innerHTML = '';
  commentsNumber.innerHTML = `(${comment.length})`;
  comment.forEach(function(commentItem) {
    const commentContainer = document.createElement('li');
    commentContainer.innerHTML = `
    <span id='comment-date'>${commentItem.creation_date}</span> - <span id='comment-user'>${commentItem.username}</span>
      <div id='comment-content'>${commentItem.comment}</div>
    `;
    comments.appendChild(commentContainer);
  });
};

const clearFields = () => {
  inputDescription.value = '';
  inputUsername.value = '';
};

publishCommentButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const newUser = inputUsername.value;
  const newDescription = inputDescription.value;
  clearFields();
  await submitComment(newUser, newDescription);
  displayComments();
});

export default displayComments;
