import { $ } from './utils.js';

const commentCounterFunction = (className = 'commentary-item') => $(`.${className}`)?.length || 0;

export default commentCounterFunction;
