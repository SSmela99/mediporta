import theme from "./theme";

export const MAIN_TEMPLATE = {
  height: "800px",
  border: "1px solid black",
  borderRadius: "12px",
  backgroundColor: "#fff",
  overflowY: "scroll",
  overflowX: "hidden",
  position: "relative",
  "&": {
    padding: "0 0",
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
};
