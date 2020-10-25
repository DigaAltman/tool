import axios from 'axios';

const httpRequest = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      let promise = axios.get(url, {
        params
      });

      promise
        .then(res => resolve(res.data))
        .catch(err => reject(err.data));
    });
  },

  post(url, params) {
    return new Promise((resolve, reject) => {
      let promise = axios.post(url, {
        params
      });

      promise
        .then(res => resolve(res.data))
        .catch(err => reject(err.data));
    });
  }
};

export default httpRequest;
