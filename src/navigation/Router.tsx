import { Route, Routes } from "react-router-dom";
import { PATHS } from "./paths";
import MainPage from "../pages/MainPage/MainPage";
import AboutPage from "../pages/AboutPage/AboutPage";

const Router = () => {
  return (
    <Routes>
      <Route path={PATHS.ROOT} element={<MainPage />} />
      <Route path={PATHS.ABOUT} element={<AboutPage />} />
    </Routes>
  );
};

export default Router;
