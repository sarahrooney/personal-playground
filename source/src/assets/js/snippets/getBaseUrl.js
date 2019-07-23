export default getBaseUrl;

import { trim } from 'lodash';

function getBaseUrl() {
  let base = `${window.location.origin}${window.location.pathname.replace(window.location.hash,'')}`;
  base = trim(base, '/');
  return base;
}
