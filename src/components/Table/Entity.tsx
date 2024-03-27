import { Typography } from "@mui/material";

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

export default Entity;
