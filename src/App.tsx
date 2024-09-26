import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CountriesProvider } from "./contexts/CountriesContexts";

import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import useLocalStorage from "use-local-storage";

function App(): React.JSX.Element {
  const defaultDark: boolean = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const [theme, setTheme] = useLocalStorage<"light" | "dark">(
    "theme",
    defaultDark ? "dark" : "light"
  );

  return (
    <div className="app" data-theme={theme}>
      <CountriesProvider>
        <BrowserRouter>
          <Header>
            <NavBar />
            <ThemeSwitcher setTheme={setTheme} theme={theme} />
          </Header>
          <Routes>
            <Route index element={<HomePage />} />
            {/* <Route path="country/:cca3/:countryName" element={<DetailPage />} /> */}
            <Route path="country/:countryName/:cca3" element={<DetailPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CountriesProvider>
    </div>
  );
}

export default App;
