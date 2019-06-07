import { BASE_URL, MAKE_URL } from '../constants/urls';

export const fetchMakeApi = () => {
  const data = fetch(`${BASE_URL}${MAKE_URL}`)
    .then(response => response.json())
    .catch(error => error);
  return data;
}

export const fetchModelApi = (makeKey) => {
  const data = fetch(`${BASE_URL}${MAKE_URL}/key/${makeKey}/models`)
    .then(response => response.json())
    .catch(error => error);
  return data;
}
