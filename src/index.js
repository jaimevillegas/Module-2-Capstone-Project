import './style.css';
import './loader.css';
// import retreiveData from './involvementAPI.js';
// import displayComments from './showComments.js';
import { $ } from './modules/utils.js';
import getData from './modules/nasaApi.js';
import createCard from './modules/createCard.js';
import cardsCounter from './modules/cardsCounter.js';

// const popupCommentsCloseButton = document.getElementById('popup-comments-close-button');
// const commentsButton = document.querySelector('#comments-button');

const fetchAndRender = async (options = { title: 'Earth' }, clean = false) => {
  const container = $('#cards');
  $('#loader-container').style.display = 'flex';
  if (clean) container.innerHTML = '';
  const data = await getData(options);
  const cards = data.map((item) => createCard(item));
  $('#loader-container').style.display = 'none';
  $('#load-more').style.display = 'block';
  container.append(...cards);
  $('.active').textContent = cardsCounter();
};

const loadMore = async () => {
  const currentTitle = $('.active').parentElement.text.split(' ')[0];
  const currentCarsCount = cardsCounter();
  const pageSize = 20;
  const page = Math.floor(currentCarsCount / pageSize) + 1;
  $('#load-more').style.display = 'none';
  await fetchAndRender({ title: currentTitle, page_size: pageSize, page });
};

const init = async () => {
  const links = $('.nav-link');
  links.forEach((link) => {
    link.addEventListener('click', (ev) => {
      ev.preventDefault();
      const title = ev.target.textContent;
      fetchAndRender({ title }, true);
      $('.active').innerHTML = '';
      $('.active').classList.remove('active');
      $('#load-more').style.display = 'none';
      link.firstElementChild.classList.add('active');
    });
  });
  $('#load-more').addEventListener('click', () => {
    loadMore();
  });
  fetchAndRender();
};

window.onload = () => {
  init();
};


