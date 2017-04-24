import fetch from 'isomorphic-fetch';

export const headers = () => {

  const token = JSON.parse(localStorage.getItem('token'));

  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer: ${token}`,
  }
}

export const parseResponse = (response) => {
  return response.json()
    .then(json => {
      if (!response.ok) {
        console.log(json.errors)
        return Promise.reject(json.errors);
      }

      return json;
    });
}

export const queryString = (params) => {
  const query = Object.keys(params).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`).join('&');

  return `${query.length ? '?' : ''}${query}`;
}

export default {

  get(url, params = {}) {
    return fetch(`${url}${queryString(params)}`, {
      method: 'GET',
      headers: headers(),
    })
    .then(parseResponse)
  },

  post(url, data = {}) {
    const body = JSON.stringify(data);
    return fetch(`${url}`, {
      method: 'POST',
      headers: headers(),
      body,
    })
    .then(parseResponse)
  },

  patch(url, data) {
    const body = JSON.stringify(data);

    return fetch(`${url}`, {
      method: 'PATCH',
      headers: headers(),
      body,
    })
    .then(parseResponse)
  },

  delete(url) {
    return fetch(`${url}`, {
      method: 'DELETE',
      headers: headers(),
    })
    .then(parseResponse)
  }
}