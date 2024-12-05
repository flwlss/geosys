import Container from '../../components/Container/Container';

import './Tools.scss';
import tools2 from '../../assets/images/tools2.png';

import Back from '/src/assets/images/icons/back.svg?react';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '../../components/Modal/Modal';
import { useModal } from '../../common/helpers';
import Button from '../../components/Button/Button';
import Number3 from '/src/assets/images/icons/number3.svg?react';

const Tools = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { isOpen, openModal, closeModal } = useModal();

  const [nav, setNav] = useState(1);
  return (
    <div className="Tools">
      <Number3 className="LoggingTruck__number" />
      {isOpen && <Modal closeModal={closeModal} />}
      <Container>
        <div className="LoggingTruck__contentWrapper">
          <div onClick={() => navigate('/geophysics')} className="back">
            <Back />
            {t('geoPhysics.main.marker')}
          </div>
          <div className="content">
            <div className="truck">
              <div className="redBlock" />
              {t('geoPhysics.main.title3noCaps')}
              <img src={tools2} />
              <Button
                text={t('geoPhysics.main.button2')}
                onClick={() => {
                  openModal();
                }}
              />
            </div>
            <div className="wrapperInfo">
              <div className="navInfo">
                <div
                  onClick={() => setNav(1)}
                  className={nav === 1 ? 'navInfoItemActive' : 'navInfoItem'}
                >
                  <div className="item">
                    <div className="redDot" />
                    {t('geoPhysics.navigation.mainInformation')}
                  </div>
                </div>
              </div>
              <div className="infoContent">
                {nav === 1 && (
                  <>
                    <div className="text1">{t('geoPhysics.tools.text1')}</div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="redBlock2" />
        </div>
      </Container>
    </div>
  );
};

export default Tools;
