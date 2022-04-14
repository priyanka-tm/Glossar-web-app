// export const BASE_URL = 'https://web-glooser.herokuapp.com/api/app';

export const BASE_URL = 'http://192.168.1.17:12000/api/app';

export const getUser = () => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
  };
  export const getEmail = () => {
    const userEmail = sessionStorage.getItem('user_email');
    if (userEmail) return JSON.parse(userEmail);
    else return null;
  };
  export const getData = () => {
    const userData = sessionStorage.getItem('data');
    if (userData) return JSON.parse(userData);
    else return null;
  };
  // return the token from the session storage
  export const getToken = () => {
    return sessionStorage.getItem('token') || null;
  };
  // remove the token and user from the session storage
  export const removeUserSession = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('user_email');
  };
  // set the token and user from the session storage
  export const setUserSession = (token, user, email, phone, data) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
    sessionStorage.setItem('user_email', JSON.stringify(email));
    sessionStorage.setItem('user_phone', JSON.stringify(phone));
    sessionStorage.setItem('data', JSON.stringify(data));
  };