import './style.css';
// import retreiveData from './involvementAPI.js';
import displayComments from './showComments.js';
import { $ } from './modules/utils.js';
import { getData } from './modules/nasaApi.js';
import createCard from './modules/createCard.js';

const commentsButton = document.getElementById('comments-button');
const popupCommentsCloseButton = document.getElementById('popup-comments-close-button');

const init = async () => {
  const container = $('#cards');
  const data = await getData();
  const cards = data.map((item) => createCard(item));
  console.log(container);
  container.append(...cards);
};

window.onload = async () => {
  await init();
};

popupCommentsCloseButton.addEventListener('click', () => {
  document.querySelector('.popup-comments-back').style.display = 'none';
});

commentsButton.addEventListener('click', () => {
  document.querySelector('.popup-comments-back').style.display = 'block';
  displayComments();
});