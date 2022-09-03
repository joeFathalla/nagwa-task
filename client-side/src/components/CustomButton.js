import { Button } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React from "react";

function CustomButton({ handler, type, isSelected, isCorrect }) {
  return (
    <Button
      variant="contained"
      onClick={handler}
      sx={{ width: "100%" }}
      disabled={isCorrect !== null}
      className={
        !isSelected
          ? null
          : isCorrect
          ? "!bg-green-500 !text-white"
          : "!bg-red-500 !text-white"
      }
      startIcon={
        !isSelected ? null : isCorrect ? <CheckCircleIcon /> : <CancelIcon />
      }
    >
      {type}
    </Button>
  );
}

export default CustomButton;
