import commentCounterFunction from '../modules/commentsCounter.js';

describe('tests', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('Comment counter', () => {
    const comment1 = document.createElement('li');
    const comment2 = document.createElement('li');
    comment1.setAttribute('class', 'commentary-item');
    comment2.setAttribute('class', 'commentary-item');
    document.body.append(comment1, comment2);
    expect(commentCounterFunction()).toBe(2);
  });

  test('0 Comments', () => {
    expect(commentCounterFunction()).toBe(0);
  });
});
