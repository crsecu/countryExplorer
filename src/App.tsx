import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CountriesProvider } from "./contexts/CountriesContexts";

import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";

function App(): React.JSX.Element {
  return (
    <CountriesProvider>
      <BrowserRouter>
        <Header>
          <NavBar />
          <ThemeSwitcher />
        </Header>
        <Routes>
          <Route index element={<HomePage />} />
          {/* <Route path="country/:cca3/:countryName" element={<DetailPage />} /> */}
          <Route path="country/:countryName/:cca3" element={<DetailPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CountriesProvider>
  );
}

export default App;
