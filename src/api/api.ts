import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";

import { toCamel, toSnakeCase } from "helpers/convert/convert-object-keys";
import { trimValue } from "helpers/convert/trim-value";
import store from "redux/store";

/**
 * Adds authorization headers to API calls
 * @param {AxiosRequestConfig} request
 */
const authInterceptor = (request: AxiosRequestConfig) => {
  const requestConfig = trimValue(request);
  requestConfig.params = toSnakeCase(requestConfig.params, true);
  requestConfig.data = toSnakeCase(requestConfig.data, true);

  const { accessToken } = store.getState().auth;

  if (accessToken) {
    requestConfig.headers.Authorization = `Bearer ${accessToken}`;
  }

  return requestConfig;
};

/**
 * Axios response interceptors
 * @param {AxiosResponse} response
 */
const responseInterceptor = (response: AxiosResponse) => {
  response.data = toCamel(response.data);
  return response;
};

/**
 * Axios error interceptor
 * @param {AxiosError} axiosError
 */
const errorInterceptor = (axiosError: AxiosError) => {
  if (axiosError && axiosError.response) {
    // Handle error here
    axiosError.response = toCamel(axiosError.response);
  }
  return Promise.reject(axiosError);
};

/** Setup an API instance */
export const api = axios.create({
  baseURL: process.env.REACT_APP_HOST,
  headers: { "Content-Type": "application/json" },
});

/** Add interceptor */
api.interceptors.request.use(authInterceptor);
api.interceptors.response.use(responseInterceptor, errorInterceptor);
