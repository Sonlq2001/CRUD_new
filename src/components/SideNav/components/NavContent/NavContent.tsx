import React, { FC, memo } from "react";

import { ListItem, ListItemText } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import { useLocation, Link as RouterLink } from "react-router-dom";

// eslint-disable-next-line no-restricted-imports
import { HOME_SCREEN } from "features/home/routes/home.routes";
import { ROUTE_LIST } from "routes/routes.config";
import { RouteItemDef, RouterLocation } from "types/routes.types";

import NavListItem from "../NavListItem/NavListItem";
import NestedListItem from "../NestedListItem/NestedListItem";
import { useStyles } from "./NavContent.styles";

interface NavContentProps {
  sideNavToggle?: () => void;
}
const NavContent: FC<NavContentProps> = ({ sideNavToggle }) => {
  const classes = useStyles();

  const navLinks: RouteItemDef[] = ROUTE_LIST.filter(
    route => !route.isAuthRoute && route.navigationTitle
  );

  const handleLogout = () => {
    // TODO: handle logout
  };

  // Making default path "/" to be placed in top of navBar
  navLinks.sort((x, y) => {
    if (x.path === "/") {
      return -1;
    }
    if (y.path === "/") {
      return 1;
    }
    return 0;
  });

  const location: RouterLocation = useLocation();

  return (
    <div>
      <div className={classes.toolbar} />
      {/* TODO: refactor route config */}
      <NavListItem
        item={{ ...HOME_SCREEN, navigationTitle: "ホーム" }}
        location={location}
        sideNavToggle={sideNavToggle}
        nested={false}
      />
      <Divider />
      <List>
        {navLinks.map(navItem => (
          <React.Fragment key={navItem.navigationTitle}>
            {navItem.subMenuItems ? (
              <NestedListItem
                item={navItem}
                location={location}
                sideNavToggle={sideNavToggle}
              />
            ) : (
              <NavListItem
                item={navItem}
                location={location}
                sideNavToggle={sideNavToggle}
                nested={false}
              />
            )}
          </React.Fragment>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem button component={RouterLink} to="">
          <ListItemText>パスワード変更</ListItemText>
        </ListItem>

        <ListItem button component={RouterLink} to="/product">
          <ListItemText>Product</ListItemText>
        </ListItem>

        <ListItem button component={RouterLink} to="/sign-in">
          <ListItemText>Login</ListItemText>
        </ListItem>

        <ListItem button onClick={handleLogout}>
          <ListItemText>ログアウト</ListItemText>
        </ListItem>
      </List>
    </div>
  );
};

export default memo(NavContent);
