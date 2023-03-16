import { createElement, trauncateText } from './utils.js';
import { addLike } from '../involvementAPI.js';
import updateCard from './updateCard.js';

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
          console.log(data[index].likes);
          updateCard(index, data[index].likes);
        }
        like.removeAttribute('disabled');
      }
    },
  });
  const comment = createElement('div', {
    class: 'icon',
    innerHTML: '<i class="fa-regular fa-comment"></i> 32',
  });
  interactions.append(like, comment);
  info.append(title, description, interactions);
  card.append(image, info);
  return card;
}
