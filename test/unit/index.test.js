
import 'babel-polyfill';
import expect from 'expect';
import models from '../../db/models';

describe('db/models/index', () => {
  it('returns the question model', () => {
    const question = models.Question;
    expect(question).toExist();
  });

  it('returns the answer model', () => {
    const answer = models.Answer;
    expect(answer).toExist();
  });
});
