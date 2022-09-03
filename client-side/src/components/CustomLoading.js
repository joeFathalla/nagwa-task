import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function CustomLoading() {
  return (
    <Box className="w-full h-full text-center mt-20">
      <CircularProgress size={100} />
    </Box>
  );
}

export default CustomLoading;
