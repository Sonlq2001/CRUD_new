import { AUTH_ROUTES } from "features/auth/auth";
import { HOME_ROUTES } from "features/home/home";
import { PRODUCT_ROUTES } from "features/product/product";

export const ROOT_ROUTE = "/";
export const AUTH_ROUTE = "/sign-in";

export const ROUTE_LIST = [...AUTH_ROUTES, ...PRODUCT_ROUTES, ...HOME_ROUTES];
