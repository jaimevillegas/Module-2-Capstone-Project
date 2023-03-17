import { $ } from './utils.js';

const updateCard = (index, likes) => {
  const container = $('#cards');
  const target = container.children[index];
  target.querySelector(
    '.icon',
  ).innerHTML = `<i class="fa-solid fa-heart"></i> ${likes}`;
};

export default updateCard;
