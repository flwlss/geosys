import './Navbar.scss';
import Logo from '../../assets/images/logo.svg';
import LangSelection from '../LangSelection/LangSelection';
import Rectangle from '/src/assets/images/icons/rectangle.svg?react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../navigation/paths';
import MobileMenu from '../MobileMenu/MobileMenu';
import { useModal } from '../../common/helpers';
import Modal from '../Modal/Modal';

const Navbar = () => {
  const [showUnderMenu, setShowUnderMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();
  const { isOpen, openModal, closeModal } = useModal();

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
              onClick={() => {
                navigate(PATHS.ABOUT);
              }}
            >
              О нас
            </p>
            <p>Геофизика</p>
            <p
              onClick={() => {
                navigate(PATHS.SPECIAL_EQUIPMENT);
              }}
            >
              Поставка аэродромной противопожарной
              <br />
              спецтехники NAFFCO
            </p>
            <p
              onClick={() => {
                navigate(PATHS.CONTACTS);
              }}
            >
              Контакты
            </p>
          </div>
          <div className="navbar__actions">
            <LangSelection />
            <div className="navbar__actions__request">
              <Rectangle />
              <p onClick={openModal}>Оставить заявку</p>
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
              меню
            </p>
          </div>
        </div>
      </div>
      {showUnderMenu && (
        <div className="navbar__underMenu">
          <p
            onClick={() => {
              navigate(PATHS.ABOUT);
            }}
          >
            О нас
          </p>
          <p>Геофизика</p>
          <p
            onClick={() => {
              navigate(PATHS.SPECIAL_EQUIPMENT);
            }}
          >
            Поставка аэродромной противопожарной
            <br />
            спецтехники NAFFCO
          </p>
          <p>Контакты</p>
        </div>
      )}
      {showMobileMenu && (
        <MobileMenu
          closeModal={() => {
            setShowMobileMenu(false);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
