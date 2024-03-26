import { useCallback, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import queryString from "query-string";

import { tableHeaders } from "@/constants";
import { Box, Button, TextField, Typography } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import Pagination from "@/components/Pagination";
import theme from "@/styles/theme";

const TableHeaders = () => {
  const currentSearchParams = queryString.parse(window.location.search);

  const [searchParams, setSearchParams] = useSearchParams();
  const [pageSize, setPageSize] = useState(searchParams.get("pagesize") ?? 25);

  const inputRef = useRef<HTMLInputElement>(null);

  const setOrderProperly = useCallback((order: string | null) => {
    return order === "asc" ? "desc" : "asc";
  }, []);

  const setParams = useCallback(
    (param: string) => {
      const sortParam =
        param === searchParams.get("sort")
          ? setOrderProperly(searchParams.get("order"))
          : "desc";

      setSearchParams({
        ...currentSearchParams,
        sort: param,
        order: sortParam,
        pagesize: pageSize as string,
      });
    },
    [
      currentSearchParams,
      pageSize,
      searchParams,
      setOrderProperly,
      setSearchParams,
    ]
  );

  return (
    <Box position="sticky" top="0" bgcolor="#fff" pt="24px" zIndex="11">
      <Box display="flex" alignItems="center" gap={2} px={2}>
        <Pagination />
        <Box flex={1} />
        <TextField
          inputRef={inputRef}
          type="number"
          InputProps={{ inputProps: { min: 1, max: 100 } }}
          defaultValue={pageSize}
          onChange={(e) => setPageSize(e.target.value)}
          label="Page size"
        />
        <Button
          variant="contained"
          disabled={
            parseInt(inputRef.current?.value as string, 10) <= 0 ||
            parseInt(inputRef.current?.value as string, 10) > 100
          }
          onClick={() =>
            setSearchParams({
              ...currentSearchParams,
              pagesize: pageSize as string,
            })
          }
        >
          Set page size
        </Button>
      </Box>
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        textAlign="center"
        mt="16px"
        borderBottom="1px solid gray"
        borderTop="1px solid gray"
      >
        {tableHeaders.map((h) => (
          <Box
            key={h.name}
            width={h.width}
            borderRight="1px solid gray"
            display="flex"
            justifyContent="center"
            p="12px 16px"
            sx={{
              cursor: "pointer",
              transition: "background-color 0.2s linear",
              "&:last-child": {
                borderRight: "none",
              },
              "&:hover": {
                backgroundColor: theme.palette.secondary.main,
              },
            }}
            onClick={() => setParams(h.params)}
          >
            <Typography>{h.name}</Typography>
            {searchParams.get("sort") === h.params && (
              <ArrowDropUpIcon
                sx={{
                  transform: `rotate(${
                    searchParams.get("order") === "desc" ? "180deg" : "0deg"
                  })`,
                  transition: "transform 0.2s linear",
                }}
              />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TableHeaders;
