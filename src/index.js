import './style.css';
// import retreiveData from './involvementAPI.js';
import displayComments from './showComments.js';

const commentsButton = document.getElementById('comments-button');
const popupCommentsCloseButton = document.getElementById('popup-comments-close-button');

popupCommentsCloseButton.addEventListener('click', () => {
  document.querySelector('.popup-comments').style.display = 'none';
});

commentsButton.addEventListener('click', () => {
  document.querySelector('.popup-comments').style.display = 'block';
  displayComments();
});
