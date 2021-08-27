import React, { FC, memo, useState } from "react";

import { Box } from "@material-ui/core";

import SideNav from "components/SideNav/SideNav";

const NoDefaultNavbarLayout: FC = ({ children }) => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const onToggleSideNav = (): void => {
    setSideNavOpen(!sideNavOpen);
  };

  return (
    <Box
      position="relative"
      height="100vh"
      display="flex"
      bgcolor="background.secondary"
      zIndex={1}
    >
      <SideNav sideNavOpen={sideNavOpen} sideNavToggle={onToggleSideNav} />
      <Box display="flex" flex={1} flexDirection="column" overflow="auto">
        {children}
      </Box>
    </Box>
  );
};

export default memo(NoDefaultNavbarLayout);
