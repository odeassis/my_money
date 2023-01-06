import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/Theme/default";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}
