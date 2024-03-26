import { TagsEntity } from "@/interfaces/services";
import theme from "@/styles/theme";
import { Box, Typography } from "@mui/material";

interface EntityProps {
  children: React.ReactNode;
  width: number;
}

const Entity = ({ children, width }: EntityProps) => {
  return (
    <Typography
      width={`${width}%`}
      borderRight="1px solid gray"
      pl="16px"
      py="12px"
      sx={{
        "&:last-child": {
          borderRight: "none",
        },
      }}
    >
      {children}
    </Typography>
  );
};

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
