import { Route, Routes } from 'react-router-dom';
import { PATHS } from './paths';
import MainPage from '../pages/MainPage/MainPage';
import AboutPage from '../pages/AboutPage/AboutPage';
import SpecialEquipment from '../pages/SpecialEquipment/SpecialEquipment';
import Equipment from '../pages/Equipment/Equipment';
import Contacts from '../pages/Contacts/Contacts';

const Router = () => {
  return (
    <Routes>
      <Route path={PATHS.ROOT} element={<MainPage />} />
      <Route path={PATHS.ABOUT} element={<AboutPage />} />
      <Route path={PATHS.SPECIAL_EQUIPMENT} element={<SpecialEquipment />} />
      <Route path={PATHS.EQUIPMENT} element={<Equipment />} />
      <Route path={PATHS.CONTACTS} element={<Contacts />} />
    </Routes>
  );
};

export default Router;
