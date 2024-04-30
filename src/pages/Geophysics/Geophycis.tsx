import Container from '../../components/Container/Container';
import Marker from '../../components/Marker/Marker';
import './Geophysics.scss';
import logginTruck from '../../assets/images/loggingTruck.jpg';
import skidMountedUnit from '../../assets/images/skidMountedUnit.jpg';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useModal } from '../../common/helpers';
import Modal from '../../components/Modal/Modal';

const Geophycis = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { isOpen, openModal, closeModal } = useModal();
  return (
    <div className="geophysics">
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
              <button onClick={openModal}>{t('geoPhysics.main.button')}</button>
            </div>
            <div className="geophysics__content__wrapper__item">
              {t('geoPhysics.main.title2')}
              <img
                onClick={() => navigate('/geophysics/skidMountedUnit')}
                src={skidMountedUnit}
              />
              <button onClick={openModal}>{t('geoPhysics.main.button')}</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Geophycis;
