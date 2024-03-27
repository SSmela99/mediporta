import { useCallback } from "react";
import queryString from "query-string";
import { useSearchParams } from "react-router-dom";

import { useTagsStore } from "@/store/services";
import PaginationButton from "@/components/Pagination/PaginationButton";

import { Box, Typography } from "@mui/material";

const Pagination = () => {
  const currentSearchParams = queryString.parse(window.location.search);
  const { hasMore } = useTagsStore();

  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") as string, 10) || 1;

  const setPage = useCallback(
    (action: "prev" | "next") => {
      setSearchParams({
        ...currentSearchParams,
        page: action === "prev" ? (page - 1).toString() : (page + 1).toString(),
      });
    },
    [currentSearchParams, page, setSearchParams]
  );

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <PaginationButton
        text="Prev"
        onClick={() => (page > 1 ? setPage("prev") : null)}
        style={{
          cursor: page > 1 ? "pointer" : "unset",
        }}
      />
      <Typography>{page}</Typography>

      <PaginationButton
        text="Next"
        onClick={() => (hasMore ? setPage("next") : null)}
        style={{
          cursor: hasMore ? "pointer" : "unset",
        }}
        isSecond
      />
    </Box>
  );
};

export default Pagination;
