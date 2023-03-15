import './style.css';
import { $ } from './modules/utils.js';
import { getData } from './modules/nasaApi.js';
import createCard from './modules/createCard.js';

const init = async () => {
  const container = $('#cards');
  const data = await getData();
  console.log(data.length);
  const cards = data.map((item) => createCard(item));
  container.append(...cards);
};

window.onload = async () => {
  await init();
};
