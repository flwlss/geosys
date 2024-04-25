import { useNavigate } from "react-router-dom";
import Container from "../../components/Container/Container";
import "./Equipment.scss";
import Arrow from "/src/assets/images/icons/secondArrow.svg?react";
import { PATHS } from "../../navigation/paths";
import EquipmentSwiper from "../../components/EquipmentSwiper/EquipmentSwiper";

const Equipment = () => {
  const navigate = useNavigate();

  return (
    <div className="specialEquipment">
      <Container>
        <div className="specialEquipment__content">
          {/* <Number2 className="specialEquipment__content__number" /> */}
          <div className="equipment">
            <div
              onClick={() => {
                navigate(PATHS.SPECIAL_EQUIPMENT);
              }}
              className="equipment__goback"
            >
              <Arrow />
              <p>Поставка спецтехники NAFFCO</p>
            </div>
            <EquipmentSwiper />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Equipment;
