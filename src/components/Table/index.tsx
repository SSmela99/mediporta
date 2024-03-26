import { Container, Box, Typography } from "@mui/material";
import { useTagsStore } from "@/store/services";

import TableHeaders from "@/components/Table/TableHeader";
import TableRow from "@/components/Table/TableRow";
import theme from "@/styles/theme";
import Loader from "@/components/Loader";

const Table = () => {
  const { tags, isLoading, error } = useTagsStore();

  return (
    <Container
      sx={{
        height: "800px",
        border: "1px solid black",
        borderRadius: "12px",
        backgroundColor: "#fff",
        overflowY: "scroll",
        overflowX: "hidden",
        position: "relative",
        "&": {
          padding: "0 0 !important",
        },
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#7e8cd6",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: theme.palette.secondary.main,
        },
      }}
    >
      <TableHeaders />
      {isLoading && <Loader />}
      <Box width="100%" height="3000px">
        test
      </Box>
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
