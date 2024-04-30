import './Navbar.scss';
import Logo from '../../assets/images/logo.svg';
import LangSelection from '../LangSelection/LangSelection';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PATHS } from '../../navigation/paths';
import MobileMenu from '../MobileMenu/MobileMenu';
import { useModal } from '../../common/helpers';
import Modal from '../Modal/Modal';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [showUnderMenu, setShowUnderMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isOpen, openModal, closeModal } = useModal();
  const { t } = useTranslation();

  return (
    <nav className="wrapper">
      {isOpen && <Modal closeModal={closeModal} />}
      <div className="navbar">
        <img
          onClick={() => {
            navigate(PATHS.ROOT);
          }}
          className="navbar__logo"
          src={Logo}
          alt="logo"
        />
        <div className="navbar__itemsWrapper">
          <div className="navbar__items">
            <p
              className={
                location.pathname.includes('/about')
                  ? 'navbar__items__activeItem'
                  : ''
              }
              onClick={() => {
                navigate(PATHS.ABOUT);
              }}
            >
              {t('navbar.about')}
            </p>
            <p
              className={
                location.pathname.includes('/geophysics')
                  ? 'navbar__items__activeItem'
                  : ''
              }
              onClick={() => {
                navigate(PATHS.GEOPHYSICS);
              }}
            >
              {t('navbar.geophysics')}
            </p>
            <p
              className={
                location.pathname.includes('equipment')
                  ? 'navbar__items__activeItem'
                  : ''
              }
              onClick={() => {
                navigate(PATHS.SPECIAL_EQUIPMENT);
              }}
            >
              {t('navbar.supply')}
            </p>
            <p
              className={
                location.pathname.includes('/contacts')
                  ? 'navbar__items__activeItem'
                  : ''
              }
              onClick={() => {
                navigate(PATHS.CONTACTS);
              }}
            >
              {t('navbar.contacts')}
            </p>
          </div>
          <div className="navbar__actions">
            <LangSelection />
            <div className="navbar__actions__request">
              <div className="navbar__actions__rectangle" />
              <p onClick={openModal}>{t('navbar.request')}</p>
            </div>
            <p
              onClick={() => {
                if (window.innerWidth < 1440 && window.innerWidth >= 1024) {
                  setShowUnderMenu(!showUnderMenu);
                } else if (window.innerWidth < 1024 && window.innerWidth >= 0) {
                  setShowMobileMenu(true);
                }
              }}
              className="navbar__actions__menu"
            >
              {t('navbar.menu')}
            </p>
          </div>
        </div>
      </div>
      {showUnderMenu && (
        <div className="navbar__underMenu">
          <p
            className={
              location.pathname.includes('/about')
                ? 'navbar__underMenu__activeItem'
                : ''
            }
            onClick={() => {
              navigate(PATHS.ABOUT);
            }}
          >
            {t('navbar.about')}
          </p>
          <p
            className={
              location.pathname.includes('/geophysics')
                ? 'navbar__underMenu__activeItem'
                : ''
            }
            onClick={() => {
              navigate(PATHS.GEOPHYSICS);
            }}
          >
            {t('navbar.geophysics')}
          </p>
          <p
            className={
              location.pathname.includes('equipment')
                ? 'navbar__underMenu__activeItem'
                : ''
            }
            onClick={() => {
              navigate(PATHS.SPECIAL_EQUIPMENT);
            }}
          >
            {t('navbar.supply')}
          </p>
          <p
            className={
              location.pathname.includes('/contacts')
                ? 'navbar__underMenu__activeItem'
                : ''
            }
            onClick={() => {
              navigate(PATHS.CONTACTS);
            }}
          >
            {t('navbar.contacts')}
          </p>
        </div>
      )}
      {showMobileMenu && (
        <MobileMenu
          closeMenu={() => {
            setShowMobileMenu(false);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
