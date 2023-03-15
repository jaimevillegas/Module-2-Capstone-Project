import { createElement, trauncateText } from './utils.js';

export default function createCommentPopup(item) {
  console.log("EN CREATE COMMENT!");
  console.log(item);
  const popupCommentsBack = createElement('section', { class: `popup-comments-back-${item.nasa_id}` });
  const popupComments = createElement('section', { class: 'popup-comments' });
  const image = createElement('img', {
    src: item.image,
    alt: item.title,
  });
  const imageTitle = createElement('h2', {
    id: 'image-title',
    textContent:
      item.title.trim().length > 20 ? trauncateText(item.title, 22) : item.title,
    title: item.title,
  });
  const closeButton = createElement('i', {
    id: 'popup-comments-close-button',
    class: 'fa-regular fa-circle-xmark',
  });
  const imageDescription = createElement('p', {
    id: 'image-description',
    textContent:
      item.description.length > 155 ? trauncateText(item.description) : item.description,
  });
  const textPhotographer = createElement('p', {
    innerHTML: `Photographer: ${item.photographer}`,
  });

  const commentsTitle = createElement('h2', {
    class: 'comments-title',
    innerHTML: `Comments (CAMBIAR)`,
  });

  const commentsWrapper = createElement('div', { class: 'comments-wrapper' });
  const commentList = createElement('ul', { class: 'comment-list' });
  const form = createElement('form');
  const addAComment = createElement('h2', { textContent: 'Add a Comment' });
  const inputWrapper = createElement('div', { class: 'input-wrapper' });
  const inputUsername = createElement('div', {
    class: 'input-username',
    // PUT AN ID
    placeholder: 'Your Name',
  });
  const inputDescription = createElement('textarea', {
    id: 'input-description',
    // PUT AN ID
    placeholder: 'Your insights',
  });
  const publishCommentButton = createElement('button', {
    id: 'publish-comment-button',
    textContent: 'Comment',
  });
  form.append(addAComment, inputUsername, inputDescription, publishCommentButton);
  commentsWrapper.append(
    commentList,
    form,
  );
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
  return popupCommentsBack;
}
