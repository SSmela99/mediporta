import { useMemo } from "react";
import { Box, SxProps, Typography } from "@mui/material";
import theme from "@/styles/theme";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface PaginationButtonProps {
  text: string;
  onClick: () => void;
  style: SxProps;
  isSecond?: boolean;
}

const PaginationButton = ({
  text,
  onClick,
  style,
  isSecond = false,
}: PaginationButtonProps) => {
  const flexDirection = useMemo(
    () => (isSecond ? "row" : "row-reverse"),
    [isSecond]
  );

  return (
    <Box
      bgcolor="#fff"
      p="8px"
      display="flex"
      borderRadius="6px"
      alignItems="center"
      onClick={onClick}
      sx={{
        ...style,
        transition: "background-color 0.2s linear",
        "&:hover": {
          backgroundColor: theme.palette.primary.light,
        },
      }}
    >
      <Box display="flex" alignItems="center" flexDirection={flexDirection}>
        <Typography>{text}</Typography>
        {isSecond ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </Box>
    </Box>
  );
};

export default PaginationButton;
