import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainContainer from "./components/MainContainer";

import theme from "@/styles/theme.tsx";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainContainer />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
