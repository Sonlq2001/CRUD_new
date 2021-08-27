import React, { FC, memo, useMemo } from "react";

import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { compile } from "path-to-regexp";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

import { RootState } from "redux/rootReducer";
import { ROUTE_LIST } from "routes/routes.config";
import { RouterLocation } from "types/routes.types";

import { useStyles } from "./Navbar.styles";

interface NavbarProps {
  sideNavToggle: () => void;
}
const Navbar: FC<NavbarProps> = ({ sideNavToggle }) => {
  const classes = useStyles();
  const location: RouterLocation = useLocation();

  const { pageTitle: reduxPageTitle } = useSelector(
    (state: RootState) => state.common
  );

  const params = useParams();
  const pageTitle = useMemo(
    () =>
      reduxPageTitle ||
      ROUTE_LIST.find(route => {
        try {
          return compile(route.path)(params) === location.pathname;
        } catch {
          return false;
        }
      })?.pageTitle,
    [location.pathname, params, reduxPageTitle]
  );

  return (
    <AppBar position="fixed" color="transparent" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={sideNavToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {pageTitle}
        </Typography>
        <div className={classes.sectionDesktop} />
      </Toolbar>
    </AppBar>
  );
};

export default memo(Navbar);
