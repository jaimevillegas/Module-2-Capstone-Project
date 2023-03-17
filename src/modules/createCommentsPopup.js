// import { $ } from './utils.js';
import { retreiveData, submitComment } from '../involvementAPI.js';
import { createElement } from './utils.js';

export default function createCommentPopup(item) {
  const popupCommentsBack = createElement('section', {
    class: `popup-comments-back popup-comments-back-${item.nasa_id}`,
  });
  const popupComments = createElement('section', { class: 'popup-comments' });
  const image = createElement('img', {
    src: item.image,
    alt: item.title,
  });
  const imageTitle = createElement('h2', {
    id: 'image-title',
    textContent: item.title,
    title: item.title,
  });
  const closeButton = createElement('i', {
    id: 'popup-comments-close-button',
    class: 'fa-regular fa-circle-xmark',
  });
  const imageDescription = createElement('p', {
    id: 'image-description',
    textContent: item.description,
  });
  const textPhotographer = createElement('p', {
    innerHTML: `Photographer: ${item.photographer}`,
  });

  const commentsWrapper = createElement('div', { class: 'comments-wrapper' });
  const commentList = createElement('ul', { class: 'comment-list' });
  const form = createElement('form');
  const addAComment = createElement('h2', { textContent: 'Add a Comment' });
  const inputUsername = createElement('input', {
    class: 'input-username',
    placeholder: 'Your Name',
  });
  const inputDescription = createElement('textarea', {
    id: 'input-description',
    placeholder: 'Your insights',
  });
  const commentsTitle = createElement('h2', {
    class: 'comments-title',
    innerHTML: '',
  });
  const publishCommentButton = createElement('button', {
    id: 'publish-comment-button',
    textContent: 'Comment',
  });
  form.append(
    addAComment,
    inputUsername,
    inputDescription,
    publishCommentButton,
  );
  commentsWrapper.append(commentList, form);
  popupComments.append(
    image,
    imageTitle,
    closeButton,
    imageDescription,
    textPhotographer,
    commentsTitle,
    commentsWrapper,
  );
  popupCommentsBack.append(popupComments);
  popupCommentsBack.style.display = 'block';

  const displayComments = async () => {
    const commentCounter = await retreiveData(item.nasa_id);
    if (commentCounter.length === undefined) {
      const numberOfComments = createElement('span', {
        class: 'comments-title',
        innerHTML: 'Comments 0',
      });
      commentsTitle.innerHTML = '';
      commentsTitle.append(numberOfComments);
    } else {
      const numberOfComments = createElement('span', {
        class: 'comments-title',
        innerHTML: `Comments ${commentCounter.length}`,
      });
      commentsTitle.innerHTML = '';
      commentsTitle.append(numberOfComments);
    }

    const getComments = await retreiveData(item.nasa_id);
    commentList.innerHTML = '';
    if (Array.isArray(getComments)) {
      getComments.forEach((commentary) => {
        const commentItem = createElement('li', {
          class: 'commentary-item',
          innerHTML: `
      <span id='comment-date-${item.nasa_id}'>${commentary.creation_date}</span> - 
      <span id='comment-user-${item.nasa_id}'>${commentary.username}</span>
      <div id='comment-content-${item.nasa_id}'>${commentary.comment}</div>
      `,
        });
        commentList.append(commentItem);
      });

      return getComments;
    }
    return 1;
  };

  displayComments();

  document.addEventListener('click', (e) => {
    const target = e.target.closest('#popup-comments-close-button');

    if (target) {
      popupCommentsBack.style.display = 'none';
    }
  });

  document.addEventListener('click', async (e) => {
    const target = e.target.closest('#publish-comment-button');

    if (target) {
      e.preventDefault();
      const nasaID = item.nasa_id;
      const newUser = inputUsername.value;
      const newDescription = inputDescription.value;
      inputUsername.value = '';
      inputDescription.value = '';
      setTimeout(() => {
        displayComments();
      }, '1000');
      await submitComment(nasaID, newUser, newDescription);
    }
  });

  return popupCommentsBack;
}
