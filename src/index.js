import './style.css';
// import retreiveData from './involvementAPI.js';
// import displayComments from './showComments.js';
import { $ } from './modules/utils.js';
import { getData } from './modules/nasaApi.js';
import createCard from './modules/createCard.js';

// const popupCommentsCloseButton = document.getElementById('popup-comments-close-button');
// const commentsButton = document.querySelector('#comments-button');

const init = async () => {
  const container = $('#cards');
  const data = await getData();
  const cards = data.map((item) => createCard(item));
  container.append(...cards);
};

window.onload = async () => {
  await init();
};


