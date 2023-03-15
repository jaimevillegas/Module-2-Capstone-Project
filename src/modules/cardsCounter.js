import { $ } from './utils.js';

const counter = (className = 'card') => $(`.${className}`).length || 1;

export default counter;
