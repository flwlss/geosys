import "./MobileMenu.scss";
import Logo from "../../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../navigation/paths";
import Button from "../Button/Button";

type MobileMenuProps = {
  closeModal: () => void;
};

const MobileMenu = ({ closeModal }: MobileMenuProps) => {
  const navigate = useNavigate();

  return (
    <div className="modal">
      <div className="menu">
        <img src={Logo} alt="logo" />
        <div className="menu__items">
          <p
            onClick={() => {
              navigate(PATHS.ROOT);
              closeModal();
            }}
          >
            Главная
          </p>
          <p
            onClick={() => {
              navigate(PATHS.ABOUT);
              closeModal();
            }}
          >
            О нас
          </p>
          <p>Геофизика</p>
          <p>
            Поставка аэродромной
            <br />
            противопожарной
            <br />
            СПЕЦТЕХНИКИ NAFFCO
          </p>
          <p>Контакты</p>
        </div>
        <div className="menu__button">
          <Button
            text="Оставить заявку"
            onClick={() => {
              console.log("заявка");
            }}
          />
        </div>
        <div className="menu__lang">
          <p>Ru</p>
          <p>En</p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
