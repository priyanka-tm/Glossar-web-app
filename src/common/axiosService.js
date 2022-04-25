import axios from "axios";

class AxiosService {
  constructor() {
    const instance = axios.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    return Promise.reject(error);
  }

  get(url, headers = {}) {
    return this.instance.get(url, headers);
  }

  post(url, body, headers = {}) {
    console.log('headers: ', headers);
    return this.instance.post(url, body, headers);
  }

  patch(url, body, headers = {}) {
    return this.instance.patch(url, body, headers);
  }

  delete(url) {
    return this.instance.delete(url);
  }

  put(url, body, headers = {}) {
    return this.instance.put(url, body, headers);
  }
}

export default new AxiosService();
