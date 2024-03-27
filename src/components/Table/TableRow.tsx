import { Box } from "@mui/material";

import Entity from "@/components/Table/Entity";

import { TagsEntity } from "@/interfaces/services";
import theme from "@/styles/theme";

const TableRow = ({ count, name }: TagsEntity) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      textAlign="center"
      sx={{
        "&:hover": {
          backgroundColor: theme.palette.secondary.main,
        },
      }}
    >
      <Entity width={50}>{name}</Entity>
      <Entity width={50}>{count}</Entity>
    </Box>
  );
};

export default TableRow;
