import Container from '../../components/Container/Container';
import Marker from '../../components/Marker/Marker';
import './Geophysics.scss';
import logginTruck from '../../assets/images/loggingTruck.jpg';
import skidMountedUnit from '../../assets/images/skidMountedUnit.jpg';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useModal } from '../../common/helpers';
import Modal from '../../components/Modal/Modal';
import Button from '../../components/Button/Button';
import Number3 from '/src/assets/images/icons/number3.svg?react';

const Geophycis = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { isOpen, closeModal } = useModal();
  return (
    <div className="geophysics">
      <Number3 className="geophysics__number" />
      {isOpen && <Modal closeModal={closeModal} />}
      <Container>
        <div className="geophysics__content">
          <Marker title={t('geoPhysics.main.marker')} />
          <div className="geophysics__content__wrapper">
            <div className="geophysics__content__wrapper__item">
              {t('geoPhysics.main.title1')}
              <img
                onClick={() => navigate('/geophysics/loggingTrack')}
                src={logginTruck}
              />
              <Button
                text={t('geoPhysics.main.button')}
                onClick={() => navigate('/geophysics/loggingTrack')}
              />
            </div>
            <div className="geophysics__content__wrapper__item">
              {t('geoPhysics.main.title2')}
              <img
                onClick={() => navigate('/geophysics/skidMountedUnit')}
                src={skidMountedUnit}
              />
              <Button
                text={t('geoPhysics.main.button')}
                onClick={() => navigate('/geophysics/skidMountedUnit')}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Geophycis;
