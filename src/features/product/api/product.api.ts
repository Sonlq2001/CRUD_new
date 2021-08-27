import { AxiosResponse } from "axios";

import { api } from "api/api";
import { ProductEndpointsEnum } from "./../constants/product.endpoints";
import { Todo } from "./../types/product.types";

const productApi = {
  getAll(): Promise<AxiosResponse> {
    return api.get(ProductEndpointsEnum.GET_ALL);
  },

  add(todo: Todo): Promise<AxiosResponse> {
    return api.post(ProductEndpointsEnum.ADD, todo);
  },

  remove(id: string | undefined): Promise<AxiosResponse> {
    return api.delete(`${ProductEndpointsEnum.REMOVE}/${id}`);
  },

  update(todo: Todo): Promise<AxiosResponse> {
    return api.put(`${ProductEndpointsEnum.UPDATE}/${todo.id}`, todo);
  },
};

export default productApi;
