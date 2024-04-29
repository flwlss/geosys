import Container from '../../components/Container/Container';
import Marker from '../../components/Marker/Marker';
import './Geophysics.scss';
import logginTruck from '../../assets/images/loggingTruck.jpg';
import skidMountedUnit from '../../assets/images/skidMountedUnit.jpg';
import { useNavigate } from 'react-router-dom';

const Geophycis = () => {
  const navigate = useNavigate();
  return (
    <div className="geophysics">
      <Container>
        <div className="geophysics__content">
          <Marker title="Геофизика" />
          <div className="geophysics__content__wrapper">
            <div className="geophysics__content__wrapper__item">
              Каротажный подъемник
              <img
                onClick={() => navigate('/geophysics/loggingTrack')}
                src={logginTruck}
              />
              <button>Заказать</button>
            </div>
            <div className="geophysics__content__wrapper__item">
              SKID-MOUNTED UNIT
              <img src={skidMountedUnit} />
              <button>Заказать</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Geophycis;
