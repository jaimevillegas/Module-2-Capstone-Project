import './style.css';
import './loader.css';
import { $ } from './modules/utils.js';
import getData from './modules/nasaApi.js';
import createCard from './modules/createCard.js';
import cardsCounter from './modules/cardsCounter.js';
import { getLikes } from './involvementAPI.js';
import combineData from './modules/combineData.js';

const fetch = async (options = { title: 'Earth' }, clean = false) => {
  $('#loader-container').style.display = 'flex';
  if (clean) $('#cards').innerHTML = '';
  const data = await getData(options);
  const likes = await getLikes();
  const combined = combineData(data, likes);
  return combined;
};

const render = (data, clean) => {
  const container = $('#cards');
  if (clean) container.innerHTML = '';
  const cards = data.map((item, index) => createCard(item, index, data));
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
  const newData = await fetch({
    title: currentTitle,
    page_size: pageSize,
    page,
  });
  render(newData);
};

const init = async () => {
  const links = $('.nav-link');
  links.forEach((link) => {
    link.addEventListener('click', async (ev) => {
      ev.preventDefault();
      $('#load-more').style.display = 'none';
      const title = ev.target.textContent;
      const data = await fetch({ title }, true);
      $('.active').innerHTML = '';
      $('.active').classList.remove('active');
      link.firstElementChild.classList.add('active');
      render(data);
    });
  });
  $('#load-more').addEventListener('click', () => {
    loadMore();
  });
  const data = await fetch();
  render(data);
};

window.onload = async () => {
  init();
};
