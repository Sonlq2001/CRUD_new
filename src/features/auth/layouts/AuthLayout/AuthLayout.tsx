import React, { FC, memo } from "react";

import { AppBar, Toolbar, Typography } from "@material-ui/core";

import { useStyles } from "./AuthLayout.styles";

const AuthLayout: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            管理(仮)
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default memo(AuthLayout);
