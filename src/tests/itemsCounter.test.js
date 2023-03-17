import cardsCounter from '../modules/cardsCounter.js';

describe('cardsCounter tests', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('cardsCounter should return the right number of cards on the DOM', () => {
    const card1 = document.createElement('div');
    card1.className = 'card';
    const card2 = document.createElement('div');
    card2.className = 'card';
    document.body.append(card1, card2);
    const cardsCount = cardsCounter('card');
    expect(cardsCount).toBe(2);
  });

  test('cardsCounter should return 0 when there is no cards on the DOM', () => {
    const cardsCount = cardsCounter('card');
    expect(cardsCount).toBe(0);
  });

  test('cardsCounter gets called with the given parameter', () => {
    const counter = jest.fn(cardsCounter);
    const testClassName = 'photo';
    counter(testClassName);
    expect(counter).toBeCalledWith(testClassName);
  });
});
