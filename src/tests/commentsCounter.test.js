import commentCounter from '../modules/commentaryCounter.js';

describe('tests', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('Comment counter: 2 comments', () => {
    const comment1 = document.createElement('li');
    const comment2 = document.createElement('li');
    comment1.setAttribute('class', 'commentary-item');
    comment2.setAttribute('class', 'commentary-item');
    document.body.append(comment1, comment2);
    expect(commentCounter()).toBe(2);
  });

  test('Comment counter: 4 comments', () => {
    const comment1 = document.createElement('li');
    const comment2 = document.createElement('li');
    const comment3 = document.createElement('li');
    const comment4 = document.createElement('li');
    comment1.setAttribute('class', 'commentary-item');
    comment2.setAttribute('class', 'commentary-item');
    comment3.setAttribute('class', 'commentary-item');
    comment4.setAttribute('class', 'commentary-item');
    document.body.append(comment1, comment2, comment3, comment4);
    expect(commentCounter()).toBe(4);
  });
});
