import { AxiosResponse } from "axios";
// import MockAdapter from "axios-mock-adapter";

import { api } from "api/api";

import { AuthEndpointsEnum } from "../constants/auth.endpoints";
import { FromValue } from "../types/auth.types";
// import postLoginMock from "mock-data/post_login.json";

// const mock = new MockAdapter(api, { onNoMatch: "passthrough" });

const signIn = (data: FromValue): Promise<AxiosResponse> => {
  // mock.onPost(AuthEndpointsEnum.LOGIN).reply(200, postLoginMock);
  return api.post(AuthEndpointsEnum.LOGIN, data);
};

const register = (data: FromValue): Promise<AxiosResponse> => {
  return api.post(AuthEndpointsEnum.REGISTER, data);
};

export const authApi = {
  signIn,
  register,
};
