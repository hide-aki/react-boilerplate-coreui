import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the rsDemoPage state domain
 */

const selectRsDemoPageDomain = state => state.get('rsDemoPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by RsDemoPage
 */

const makeSelectRsDemoPage = () =>
  createSelector(selectRsDemoPageDomain, substate => substate.toJS());

export default makeSelectRsDemoPage;
export { selectRsDemoPageDomain };
