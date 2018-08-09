/**
 *
 * Asynchronously loads the component for AppHeaderBar
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
