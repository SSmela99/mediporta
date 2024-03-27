import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useTagsStore } from "@/store/services";

import { Box } from "@mui/material";
import Table from "@/components/Table";
import theme from "@/styles/theme";

import q from "query-string";

const MainContainer = () => {
  const { fetchTags } = useTagsStore();
  const { search } = useLocation();

  useEffect(() => {
    fetchTags(q.parse(search));
  }, [fetchTags, search]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      width="100%"
      bgcolor={theme.palette.primary.main}
    >
      <Table />
    </Box>
  );
};

export default MainContainer;
