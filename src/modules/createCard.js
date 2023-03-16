import { $, createElement, trauncateText } from './utils.js';
import { addLike, retreiveData } from '../involvementAPI.js';
import updateCard from './updateCard.js';
import createCommentPopup from './createCommentsPopup.js';
import commentCounterFunction from './commentsCounter.js';

const contentWrapper = document.querySelector('.content-wrapper');

export default function createCard(item, index, data) {
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
    innerHTML: `<i class="fa-regular fa-heart"></i> ${item.likes}`,
    onclick: async () => {
      if (!like.getAttribute('disabled')) {
        like.setAttribute('disabled', true);
        const result = await addLike(item.nasa_id);
        if (result.success) {
          data[index] = { ...item, likes: data[index].likes + 1 };
          updateCard(index, data[index].likes);
        }
        like.removeAttribute('disabled');
      }
    },
  });
  const comment = createElement('div', {
    class: 'icon',
    id: `comments-button-${item.nasa_id}`,
    innerHTML: '<i class="fa-regular fa-comment"></i> ',
  });
  interactions.append(like, comment);
  info.append(title, description, interactions);
  card.append(image, info);

  document.addEventListener('click', (e) => {
    const target = e.target.closest(`#comments-button-${item.nasa_id}`);

    if (target) {
      contentWrapper.append(createCommentPopup(item));
    }
  });

  const displayComments = async () => {
    const commentCounter = await retreiveData(item.nasa_id);
    if (commentCounter.length === undefined) {
      const numberOfComments = createElement('span', {
        class: 'comments-counter',
        innerHTML: '0',
      });
      comment.append(numberOfComments);
    } else {
      const numberOfComments = createElement('span', {
        class: 'comments-counter',
        innerHTML: `${commentCounter.length}`,
      });
      comment.append(numberOfComments);
    }
  };

  displayComments();

  return card;
}
