import React from "react";

import DashboardIcon from "@material-ui/icons/Dashboard";

import { RouteItemDef } from "types/routes.types";

import { ProductPathEnum } from "../constants/product.paths";

const ProductScreen = React.lazy(
  () => import("./../screens/ProductScreen/ProductScreen")
);

export const PRODUCT_SCREEN: RouteItemDef = {
  id: "PRODUCT",
  path: ProductPathEnum.PRODUCT,
  component: ProductScreen,
  icon: DashboardIcon,
  pageTitle: "Product Page",
};

export const PRODUCT_ROUTES = [PRODUCT_SCREEN];
