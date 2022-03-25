import moviescount from '../count.js';

describe('Test movie counter', () => {
  const movieArr = [
    {
      id: 97,
    },
    {
      id: 52,
    },
    {
      id: 44,
    },
  ];
  const counter = moviescount(movieArr);

  expect(counter).toBe(3);
});

test('Test counter to show no data ', () => {
  const arr = [];
  const counter = moviescount(arr);
  expect(counter).toBe(0);
});