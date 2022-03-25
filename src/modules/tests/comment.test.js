import { countComments } from '../commentCounter.js';

describe('count number of comments', () => {
  const commentArr = [
    {
      comment: 1,
    },
    {
      comment: 2,
    },
    {
      comment: 3,
    },
  ];

  const counter = countComments(commentArr);

  expect(counter).toBe(3);
});

test('Return zero if empty', () => {
  const emptyArr = [];
  const counter = countComments(emptyArr);
  expect(counter).toBe(0);
});