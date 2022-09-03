import React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CustomProgressbar(props) {
  return (
    <Box sx={{ width: "100%", textAlign: "center" }}>
      <Typography variant="h4" color="primary" className="!my-5">{`${Math.round(
        props.value
      )}%`}</Typography>
      <LinearProgress variant="determinate" value={props.value} />
    </Box>
  );
}

export default CustomProgressbar;
