import './MobileMenu.scss';
import Logo from '../../assets/images/logo.svg';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../navigation/paths';
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';
import { useModal } from '../../common/helpers';
import Modal from '../Modal/Modal';

type MobileMenuProps = {
  closeMenu: () => void;
};

const MobileMenu = ({ closeMenu }: MobileMenuProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const { isOpen, openModal, closeModal } = useModal();

  const changeLg = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="menuModal">
      {isOpen && <Modal closeModal={closeModal} />}
      <div className="menu">
        <img src={Logo} alt="logo" />
        <div className="menu__items">
          <p
            onClick={() => {
              navigate(PATHS.ROOT);
              closeMenu();
            }}
          >
            {t('navbar.main')}
          </p>
          <p
            onClick={() => {
              navigate(PATHS.ABOUT);
              closeMenu();
            }}
          >
            {t('navbar.about')}
          </p>
          <p>{t('navbar.geophysics')}</p>
          <p
            onClick={() => {
              navigate(PATHS.SPECIAL_EQUIPMENT);
              closeMenu();
            }}
          >
            {t('navbar.supply')}
          </p>
          <p
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
            onClick={() => {
              changeLg('ru');
            }}
          >
            Ru
          </p>
          <p
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
