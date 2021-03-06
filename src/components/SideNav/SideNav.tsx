import React, { FC, memo } from "react";

import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { ThemeProvider } from "@material-ui/core/styles";

import { getAppTheme } from "styles/theme";
import { ThemeTypes } from "styles/themes/theme-constants";

import { useStyles } from "./SideNav.styles";
import NavContent from "./components/NavContent/NavContent";

interface SideNavProps {
  sideNavOpen: boolean;
  sideNavToggle: () => void;
}
const SideNav: FC<SideNavProps> = ({ sideNavOpen, sideNavToggle }) => {
  const classes = useStyles();
  const theme = getAppTheme(ThemeTypes.DARK);

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Hidden mdUp implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={sideNavOpen}
            onClose={sideNavToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <NavContent sideNavToggle={sideNavToggle} />
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <NavContent />
          </Drawer>
        </Hidden>
      </ThemeProvider>
    </div>
  );
};

export default memo(SideNav);
