import { useNavigate } from 'react-router-dom';
import Container from '../../components/Container/Container';
import './Equipment.scss';
import Arrow from '/src/assets/images/icons/secondArrow.svg?react';
import { PATHS } from '../../navigation/paths';
import EquipmentSwiper from '../../components/EquipmentSwiper/EquipmentSwiper';
import { useTranslation } from 'react-i18next';
import Number4 from '/src/assets/images/icons/number4.svg?react';

const Equipment = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="specialEquipment">
      <Number4 className="specialEquipment__content__number" />
      <Container>
        <div className="specialEquipment__content">
          <div className="equipment">
            <div
              onClick={() => {
                navigate(PATHS.SPECIAL_EQUIPMENT);
              }}
              className="equipment__goback"
            >
              <Arrow />
              <p>{t('equipmentPage.backText')}</p>
            </div>
            <EquipmentSwiper />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Equipment;
