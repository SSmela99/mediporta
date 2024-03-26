import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box
      width="100%"
      height="100%"
      bgcolor="rgba(63,80,182,0.35)"
      position="fixed"
      top="0px"
    >
      <Box
        position="sticky"
        top="50%"
        left="50%"
        width="50px"
        sx={{
          "&": {
            transform: "translate3d(-50%, -50%, 0)",
          },
        }}
      >
        <CircularProgress />
      </Box>
    </Box>
  );
};

export default Loader;
