import { Container, Box, Typography } from "@mui/material";
import { useTagsStore } from "@/store/services";

import TableHeaders from "@/components/Table/TableHeader";
import TableRow from "@/components/Table/TableRow";
import Loader from "@/components/Loader";

import { MAIN_TEMPLATE } from "@/styles/customStyles";

const Table = () => {
  const { tags, isLoading, error } = useTagsStore();

  return (
    <Container sx={MAIN_TEMPLATE}>
      <TableHeaders />

      {isLoading && <Loader />}

      {error ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="calc(100% - 146px)"
        >
          <Typography fontWeight={700}>{error}</Typography>
        </Box>
      ) : (
        tags?.map((tag) => <TableRow key={tag.name} {...tag} />)
      )}
    </Container>
  );
};

export default Table;
