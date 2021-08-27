import React from "react";

import DashboardIcon from "@material-ui/icons/Dashboard";

import { RouteItemDef } from "types/routes.types";

import { HomePathsEnum } from "../constants/home.paths";

const HomeScreen = React.lazy(() => import("../screens/HomeScreen/HomeScreen"));

export const HOME_SCREEN: RouteItemDef = {
  id: "PF_TP_010",
  path: HomePathsEnum.HOME,
  component: HomeScreen,
  icon: DashboardIcon,
  pageTitle: "Dashboard Page",
};

export const HOME_ROUTES = [HOME_SCREEN];
