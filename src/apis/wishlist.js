import axiosService from "../common/axiosService";
import { API_URL } from "../common/defines";
import { renderParam } from "../common/utils";
import { BASE_URL } from './../utils/common';

const url = "/wishlist";
const url1 = '/fevorite/create'

export const fetchWishlistData = () => {
  let endpoint = API_URL + url;
  return axiosService.get(endpoint);
};

export const fetchProductIdWishlistData = (pid) => {
  let endpoint = API_URL + url + "?" + renderParam("id", pid);
  return axiosService.get(endpoint);
};

export const addWishlistData = (data) => {
  console.log('data: ', data);
  // let endpoint = BASE_URL + url1;
  let endpoint = API_URL + url;
  return axiosService.post(endpoint, data);
};

export const removeWishlistData = (pid) => {
  let endpoint = API_URL + url + `/${pid}`;
  return axiosService.delete(endpoint);
};
