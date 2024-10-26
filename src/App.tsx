import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CountriesProvider } from "./contexts/CountriesContexts";
import useLocalStorage from "use-local-storage";

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import StatusIndicator from "./components/StatusIndicator/StatusIndicator";

const HomePage = lazy(() => import("./pages/HomePage"));
const DetailPage = lazy(() => import("./pages/DetailPage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App(): React.JSX.Element {
  // Here we are checking if the user has set a preferance for dark color scheme in their operating system, and storing the result(boolean) in the "defaultDark" variable
  const defaultDark: boolean = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  console.log("defaultDark ", defaultDark);

  const [theme, setTheme] = useLocalStorage<"light" | "dark">(
    "theme",
    defaultDark ? "dark" : "light"
  );

  return (
    <div className="app" data-theme={theme}>
      <CountriesProvider>
        <BrowserRouter basename="/countryExplorer/">
          <Header>
            <NavBar />
            <ThemeSwitcher setTheme={setTheme} theme={theme} />
          </Header>
          <Suspense
            fallback={<StatusIndicator spinner={true} fullScreen={true} />}
          >
            <Routes>
              <Route index element={<HomePage />} />
              <Route
                path="country/:countryName/:cca3"
                element={<DetailPage />}
              />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CountriesProvider>
    </div>
  );
}

export default App;
