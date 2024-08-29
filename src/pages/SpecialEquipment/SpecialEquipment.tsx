import Container from '../../components/Container/Container';
import Marker from '../../components/Marker/Marker';
import './SpecialEquipment.scss';
import Naffco from '/src/assets/images/icons/naffco.svg?react';
import Arrow from '/src/assets/images/icons/arrow.svg?react';
import Checkmark from '/src/assets/images/icons/checkmark.svg?react';
import Settings from '/src/assets/images/icons/settings.svg?react';
import Edu from '/src/assets/images/icons/edu.svg?react';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../navigation/paths';
import { useTranslation } from 'react-i18next';
import Number4 from '/src/assets/images/icons/number4.svg?react';
import documentImage from '../../assets/document.png';
import AuthorizationLetter from '../../assets/documents/Authorization Letter.pdf';

const SpecialEquipment = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const openAuthorizationLetter = () => {
    window.open(AuthorizationLetter, '_blank');
  };

  return (
    <div className="specialEquipment">
      <Number4 className="specialEquipment__content__number" />
      <Container>
        <div className="specialEquipment__content">
          <Marker title={t('specialEquipmentPage.title')} />
          <div className="specialEquipment__contentWrapper">
            <div className="specialEquipment__leftContent">
              <Naffco />
              <p className="specialEquipment__leftContent__text">
                {t('specialEquipmentPage.text')}
              </p>
              <p className="specialEquipment__leftContent__subtext">
                {t('specialEquipmentPage.subtext')}
              </p>
              <div className="specialEquipment__leftContent__flagWrapper">
                <div
                  onClick={openAuthorizationLetter}
                  className="specialEquipment__leftContent__documentWrapper"
                >
                  <img src={documentImage} alt="documentImage" />
                  <div>
                    {t('specialEquipmentPage.authLetter')} <br />
                    (PDF)
                  </div>
                </div>
                <div className="specialEquipment__leftContent__flag">
                  <div className="specialEquipment__leftContent__rectangle" />
                  <div
                    onClick={() => {
                      navigate(PATHS.EQUIPMENT);
                    }}
                    className="specialEquipment__leftContent__rectangle__btn"
                  >
                    <p>{t('specialEquipmentPage.toEquipment')}</p>
                    <Arrow className="specialEquipment__leftContent__arrow" />
                  </div>
                </div>
              </div>
            </div>
            <div className="specialEquipment__rightContent">
              <p className="specialEquipment__rightContent__title">
                {t('specialEquipmentPage.howWeWorks')}
              </p>
              <div className="specialEquipment__rightContent__columnWrapper">
                <div>
                  <div className="specialEquipment__rightContent__item">
                    <Checkmark />
                    <p>{t('specialEquipmentPage.text1')}</p>
                  </div>
                  <div className="specialEquipment__rightContent__item">
                    <Settings />
                    <p>{t('specialEquipmentPage.text2')}</p>
                  </div>
                  <div className="specialEquipment__rightContent__item">
                    <Edu />
                    <p>{t('specialEquipmentPage.text3')}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="specialEquipment__rightContent__item">
                      <Checkmark />
                      <p>{t('specialEquipmentPage.text4')}</p>
                    </div>
                    <div className="specialEquipment__rightContent__item">
                      <Settings />
                      <p>{t('specialEquipmentPage.text5')}</p>
                    </div>
                    <div className="specialEquipment__rightContent__item">
                      <Edu />
                      <p>{t('specialEquipmentPage.text6')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SpecialEquipment;
