import { $ } from './utils.js';

const counter = (className = 'card') => {
  const cardCount = $(`.${className}`);
  if (cardCount && cardCount.length) {
    return cardCount.length;
  }
  return 0;
};
export default counter;
