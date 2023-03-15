import { createElement, trauncateText } from './utils.js';
import displayComments from '../showComments.js';
import createCommentPopup from './createCommentsPopup.js';

const contentWrapper = document.querySelector('.content-wrapper');

export default function createCard(item) {
  console.log(item.nasa_id);
  const card = createElement('div', { class: 'card pulse' });
  const image = createElement('img', {
    src: item.image,
    alt: item.title,
    onload: () => {
      card.classList.remove('pulse');
    },
  });
  const info = createElement('div', { class: 'card-description' });
  const title = createElement('h2', {
    textContent:
      item.title.trim().length > 20
        ? trauncateText(item.title, 22)
        : item.title,
    title: item.title,
  });
  const description = createElement('p', {
    textContent:
      item.description.length > 155
        ? trauncateText(item.description)
        : item.description,
  });
  const interactions = createElement('div', { class: 'interactions' });
  const like = createElement('div', {
    class: 'icon',
    innerHTML: `<i class="fa-regular fa-heart"></i>240`,
  });
  const comment = createElement('div', {
    class: 'icon',
    id: `comments-button-${item.nasa_id}`,
    innerHTML: `<i class="fa-regular fa-comment"></i>32`,
  });
  interactions.append(like, comment);
  info.append(title, description, interactions);
  card.append(image, info);

  document.addEventListener('click', (e) => {
    const target = e.target.closest(`#comments-button-${item.nasa_id}`);

    if (target) {
      console.log(`Clicked! button with id ${item.nasa_id}`);
      contentWrapper.append(createCommentPopup(item));
      // document.querySelector(`.popup-comments-back-${item.nasa_id}`).style.display = 'block';
    }
  });

  // commentsButton.addEventListener('click', () => {
  //   document.querySelector('.popup-comments-back').style.display = 'block';
  //   displayComments();
  // });

  return card;
}

