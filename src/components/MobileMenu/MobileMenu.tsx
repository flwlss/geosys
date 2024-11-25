import './MobileMenu.scss';
import Logo from '../../assets/images/logo.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { PATHS } from '../../navigation/paths';
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';
import { useModal } from '../../common/helpers';
import Modal from '../Modal/Modal';
import Cross from '/src/assets/images/icons/cross.svg?react';

type MobileMenuProps = {
  closeMenu: () => void;
};

const MobileMenu = ({ closeMenu }: MobileMenuProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const { isOpen, openModal, closeModal } = useModal();
  const lang = localStorage.getItem('lang');
  const location = useLocation();

  const changeLg = (lang: string) => {
    localStorage.setItem('lang', lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div onClick={closeMenu} className="menuModal">
      {isOpen && <Modal closeModal={closeModal} />}
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="menu"
      >
        <Cross onClick={closeMenu} className="menu__cross" />
        <img src={Logo} alt="logo" />
        <div className="menu__items">
          <p
            className={
              location.pathname === '/' ? 'menu__items__activeItem' : ''
            }
            onClick={() => {
              navigate(PATHS.ROOT);
              closeMenu();
            }}
          >
            {t('navbar.main')}
          </p>
          <p
            className={
              location.pathname.includes('/about')
                ? 'menu__items__activeItem'
                : ''
            }
            onClick={() => {
              navigate(PATHS.ABOUT);
              closeMenu();
            }}
          >
            {t('navbar.about')}
          </p>
          <p
            className={
              location.pathname.includes('/geophysics')
                ? 'menu__items__activeItem'
                : ''
            }
            onClick={() => {
              navigate(PATHS.GEOPHYSICS);
              closeMenu();
            }}
          >
            {t('navbar.geophysics')}
          </p>
          <p
            className={
              location.pathname.includes('special-equipment')
                ? 'menu__items__activeItem'
                : ''
            }
            onClick={() => {
              navigate(PATHS.SPECIAL_EQUIPMENT);
              closeMenu();
            }}
          >
            {t('navbar.supply')}
          </p>
          <p
            className={
              location.pathname.includes('ground-support-equipment')
                ? 'menu__items__activeItem'
                : ''
            }
            onClick={() => {
              navigate(PATHS.GROUNDSUPPORT);
            }}
          >
            {t('navbar.gse')}
          </p>
          <p
            className={
              location.pathname.includes('/contacts')
                ? 'menu__items__activeItem'
                : ''
            }
            onClick={() => {
              navigate(PATHS.CONTACTS);
              closeMenu();
            }}
          >
            {t('navbar.contacts')}
          </p>
        </div>
        <div className="menu__button">
          <Button
            text={t('navbar.request')}
            onClick={() => {
              openModal();
            }}
          />
        </div>
        <div className="menu__lang">
          <p
            className={
              lang === 'ru'
                ? 'menu__lang__activeLang'
                : 'menu__lang__inactiveLang'
            }
            onClick={() => {
              changeLg('ru');
            }}
          >
            Ru
          </p>
          <p
            className={
              lang === 'en'
                ? 'menu__lang__activeLang'
                : 'menu__lang__inactiveLang'
            }
            onClick={() => {
              changeLg('en');
            }}
          >
            En
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
