import React from "react";

import { RouteItemDef } from "types/routes.types";

import { AuthPathsEnum } from "../constants/auth.paths";

const AuthLayout = React.lazy(() => import("../layouts/AuthLayout/AuthLayout"));

const SIGN_IN_SCREEN: RouteItemDef = {
  id: "auth",
  path: AuthPathsEnum.SIGN_IN,
  component: React.lazy(() => import("../screens/SignInScreen/SignInScreen")),
  layout: AuthLayout,
  isAuthRoute: true,
};

const REGISTER_IN_SCREEN: RouteItemDef = {
  id: "auth",
  path: AuthPathsEnum.REGISTER,
  layout: AuthLayout,
  component: React.lazy(
    () => import("./../screens/RegisterScreen/RegisterScreen")
  ),
  isAuthRoute: true,
};

const AUTH_ROUTES = [SIGN_IN_SCREEN, REGISTER_IN_SCREEN];

export default AUTH_ROUTES;
