import axiosService from "../common/axiosService";
import { API_URL } from "../common/defines";
import { renderParam } from "../common/utils";
import { BASE_URL } from './../utils/common';
import {getToken} from '../utils/common';

const url = "/cart";
const url1 = '/cart/create'
const url2 = '/cart/user-get'
const url3 = '/cart/update'

export const fetchCartData = () => {
  // let endpoint = cartId ? API_URL + url + `/${cartId}` : API_URL + url;
  let endpoint =  BASE_URL + url2;
  return axiosService.get(endpoint, { headers: {
    'Authorization': getToken(),
  }});
};

export const fetchProductIdCartData = (pid) => {
  let endpoint = API_URL + url + "?" + renderParam("productId", pid);
  return axiosService.get(endpoint);
};

export const addCartData = (data) => {
  console.log('data:====== ', getToken(), data);
  // let endpoint = API_URL + url;
  let endpoint = BASE_URL + url1;
  return axiosService.post(endpoint, data, { headers: {
    'Authorization': getToken(),
  }});
};

export const removeCartData = (cartId) => {
  let endpoint = BASE_URL + url3;
  return axiosService.put(endpoint, cartId, { headers: {
    'Authorization': getToken(),
  }});
};

export const updateCartData = (cartId, data) => {
  let endpoint = API_URL + url + `/${cartId}`;
  return axiosService.patch(endpoint, data);
};
