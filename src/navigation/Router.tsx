import { Navigate, Route, Routes } from 'react-router-dom';
import { PATHS } from './paths';
import MainPage from '../pages/MainPage/MainPage';
import AboutPage from '../pages/AboutPage/AboutPage';
import SpecialEquipment from '../pages/SpecialEquipment/SpecialEquipment';
import Equipment from '../pages/Equipment/Equipment';
import Contacts from '../pages/Contacts/Contacts';
import Geophycis from '../pages/Geophysics/Geophycis';
import LoggingTruck from '../pages/LoggingTruck/LoggingTrack';
import SkidMountedUnit from '../pages/SkidMountedUnit/SkidMountedUnit';

const Router = () => {
  return (
    <Routes>
      <Route path={'*'} element={<Navigate to={PATHS.ROOT} />} />
      <Route path={PATHS.ROOT} element={<MainPage />} />
      <Route path={PATHS.ABOUT} element={<AboutPage />} />
      <Route path={PATHS.SPECIAL_EQUIPMENT} element={<SpecialEquipment />} />
      <Route path={PATHS.EQUIPMENT} element={<Equipment />} />
      <Route path={PATHS.CONTACTS} element={<Contacts />} />
      <Route path={PATHS.GEOPHYSICS} element={<Geophycis />} />
      <Route path={PATHS.GEOPHYSICS_LOGGING_TRACK} element={<LoggingTruck />} />
      <Route
        path={PATHS.GEOPHYSICS_SKID_MOUNTED_UNIT}
        element={<SkidMountedUnit />}
      />
    </Routes>
  );
};

export default Router;
