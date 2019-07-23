export default getAbsoluteUrl;

import { trim } from 'lodash';
import getBaseUrl from './getBaseUrl';

function getAbsoluteUrl(url, encode) {
  let path = getBaseUrl();
  path = trim(path, '/');
  if (url !== '/') {
    path += url;
  }
  return (encode) ? encodeURIComponent(path) : path;
}
