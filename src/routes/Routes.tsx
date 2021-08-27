import React, { FC, memo, Suspense } from "react";

import { Redirect, Route, Switch } from "react-router-dom";

import Loader from "components/Loader/Loader";
import DefaultLayout from "layouts/DefaultLayout/DefaultLayout";
import { RouteItemDef } from "types/routes.types";
import { useSelector } from "react-redux";
import { RootState } from "redux/rootReducer";

import { ROUTE_LIST, ROOT_ROUTE, AUTH_ROUTE } from "./routes.config";

const RouteWrapper: FC<RouteItemDef> = ({
  component: Component,
  layout,
  path,
  isAuthRoute,
}) => {
  const RouteLayout: FC = layout || DefaultLayout;
  const { accessToken } = useSelector((state: RootState) => state.auth);

  if (!accessToken && !isAuthRoute) {
    return <Redirect to={AUTH_ROUTE} />;
  }

  if (accessToken && isAuthRoute) {
    return <Redirect to={ROOT_ROUTE} />;
  }

  return (
    <Route
      exact
      path={path}
      render={(props): React.ReactElement => {
        const Content = (): JSX.Element => (
          <RouteLayout>
            <Component {...props} />
          </RouteLayout>
        );

        return <Content />;
      }}
    />
  );
};

const Routes: FC = () => {
  return (
    <Suspense fallback={<Loader isFullScreen />}>
      <Switch>
        {ROUTE_LIST.map(route => (
          <RouteWrapper key={route.id} {...route} />
        ))}
      </Switch>
    </Suspense>
  );
};

export default memo(Routes);
