/**
 *
 * Asynchronously loads the component for RsDemoPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
