import { $ } from './utils.js';

const counter = (className = 'card') => $(`.${className}`)?.length || 0;

export default counter;
