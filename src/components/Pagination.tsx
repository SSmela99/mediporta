import { useCallback } from "react";
import queryString from "query-string";
import { useSearchParams } from "react-router-dom";

import { useTagsStore } from "@/store/services";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Typography } from "@mui/material";
import theme from "@/styles/theme";

const Pagination = () => {
  const currentSearchParams = queryString.parse(window.location.search);
  const { hasMore } = useTagsStore();

  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") as string, 10) || 1;

  const setPage = useCallback(
    (action: "prev" | "next") => {
      console.log(action);
      setSearchParams({
        ...currentSearchParams,
        page: action === "prev" ? (page - 1).toString() : (page + 1).toString(),
      });
    },
    [currentSearchParams, page, setSearchParams]
  );

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Box
        bgcolor="#fff"
        display="flex"
        borderRadius="6px"
        p="8px"
        pr="0"
        alignItems="center"
        onClick={() => (page > 1 ? setPage("prev") : null)}
        sx={{
          cursor: page > 1 ? "pointer" : "unset",
          transition: "background-color 0.2s linear",
          "&:hover": {
            backgroundColor: theme.palette.primary.light,
          },
        }}
      >
        <Typography>prev</Typography>
        <ChevronLeftIcon />
      </Box>
      <Typography>{page}</Typography>
      <Box
        bgcolor="#fff"
        p="8px"
        pl="0px"
        display="flex"
        borderRadius="6px"
        alignItems="center"
        onClick={() => (hasMore ? setPage("next") : null)}
        sx={{
          cursor: hasMore ? "pointer" : "unset",
          transition: "background-color 0.2s linear",
          "&:hover": {
            backgroundColor: theme.palette.primary.light,
          },
        }}
      >
        <ChevronRightIcon />
        <Typography>next</Typography>
      </Box>
    </Box>
  );
};

export default Pagination;
