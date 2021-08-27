import React, { FC, memo } from "react";

import { Box } from "@material-ui/core";

const HomeScreen: FC = () => {
  return (
    <Box width={1024} mx="auto" py={6}>
      Lê Quang Sơn
    </Box>
  );
};

export default memo(HomeScreen);
