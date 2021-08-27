import { combineReducers } from "@reduxjs/toolkit";

import { authReducer } from "features/auth/auth";
import { commonReducer } from "./common.slice";
import { snackbarReducer } from "./snackbar.slice";
import { productReducer } from "features/product/redux/product.slice";

const rootReducer = combineReducers({
  auth: authReducer,
  snackbar: snackbarReducer,
  common: commonReducer,
  product: productReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
