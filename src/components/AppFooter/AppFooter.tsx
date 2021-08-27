import React, { FC, memo } from "react";

import { useStyles } from "./AppFooter.styles";

const AppFooter: FC = () => {
  const classes = useStyles();
  return <div className={classes.appFooter}>ReactJS Template.</div>;
};

export default memo(AppFooter);
