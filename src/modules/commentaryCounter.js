import { $ } from './utils.js';

const commentCounter = (className = 'commentary-item') => $(`.${className}`).length || 0;

export default commentCounter;
