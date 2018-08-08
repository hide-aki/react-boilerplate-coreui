import { fromJS } from 'immutable';
import rsDemoPageReducer from '../reducer';

describe('rsDemoPageReducer', () => {
  it('returns the initial state', () => {
    expect(rsDemoPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
