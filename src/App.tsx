import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import { DefaultSeo } from "next-seo";
import { LanguageProvider } from "./contexts/LanguageContext";

export function App() {
  return (
    <LanguageProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>

        <GlobalStyle />

        <DefaultSeo
          openGraph={{
            type: "website",
            locale: "pt_BR",
            url: "https://gugo.dev",
            siteName: "Gugo Dev",
          }}
        />
      </ThemeProvider>
    </LanguageProvider>
  );
}
