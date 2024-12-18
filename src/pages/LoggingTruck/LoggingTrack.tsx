import Container from '../../components/Container/Container';

import './LoggingTruck.scss';
import logginTruck from '../../assets/images/loggingTruck.jpg';

import Back from '/src/assets/images/icons/back.svg?react';
import Thermometer from '/src/assets/images/icons/thermometer.svg?react';
import Warn from '/src/assets/images/icons/warn.svg?react';
import Options from '/src/assets/images/icons/options.svg?react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '../../components/Modal/Modal';
import { useModal } from '../../common/helpers';
import Button from '../../components/Button/Button';
import Number3 from '/src/assets/images/icons/number3.svg?react';

const LoggingTruck = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { isOpen, openModal, closeModal } = useModal();

  const [nav, setNav] = useState(1);
  return (
    <div className="LoggingTruck">
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
              {t('geoPhysics.main.title1noCaps')}
              <img src={logginTruck} />
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
                <div
                  onClick={() => setNav(2)}
                  className={nav === 2 ? 'navInfoItemActive' : 'navInfoItem'}
                >
                  <div className="item">
                    <div className="redDot" />
                    {t('geoPhysics.navigation.technicalFeatures')}
                  </div>
                </div>
                <div
                  onClick={() => setNav(3)}
                  className={nav === 3 ? 'navInfoItemActive' : 'navInfoItem'}
                >
                  <div className="item">
                    <div className="redDot" />
                    {t('geoPhysics.navigation.specifications')}
                  </div>
                </div>
              </div>
              <div className="infoContent">
                {nav === 1 && (
                  <>
                    <div className="text1">
                      {t('geoPhysics.loggingTrack.general.text1')}
                    </div>
                    <div className="text2">
                      {t('geoPhysics.loggingTrack.general.text2')}
                    </div>
                    <div className="text3">
                      {t('geoPhysics.loggingTrack.general.text3')}
                    </div>
                    <div className="text4">
                      <Thermometer />
                      <div className="textInfo">
                        {t('geoPhysics.loggingTrack.general.text4')}
                      </div>
                    </div>
                    <div className="text5">
                      <Options />
                      <div className="textInfo">
                        {t('geoPhysics.loggingTrack.general.text5')}
                      </div>
                    </div>
                  </>
                )}
                {nav === 2 && (
                  <>
                    <>
                      <div className="techCharText1">
                        <Warn />
                        <div className="textInfo">
                          <span>
                            {t('geoPhysics.loggingTrack.techChar.title1')}
                          </span>
                          <br />
                          {t('geoPhysics.loggingTrack.techChar.text1')}
                        </div>
                      </div>
                      <div className="techCharText2">
                        <span>
                          {t('geoPhysics.loggingTrack.techChar.title2')}
                        </span>
                        <br />
                        <div className="mainText">
                          {t('geoPhysics.loggingTrack.techChar.text2')}
                        </div>
                      </div>
                      <div className="techCharText2">
                        <span>
                          {t('geoPhysics.loggingTrack.techChar.title3')}
                        </span>
                        <br />
                        <div className="mainText">
                          {t('geoPhysics.loggingTrack.techChar.text3')}
                        </div>
                      </div>
                      <div className="techCharText2">
                        <span>
                          {t('geoPhysics.loggingTrack.techChar.title4')}
                        </span>
                        <br />
                        <div className="mainText">
                          {t('geoPhysics.loggingTrack.techChar.text4')}
                        </div>
                      </div>
                    </>
                    <>
                      <div className="techCharText2">
                        <span>
                          {t('geoPhysics.loggingTrack.techChar2.title1')}
                        </span>
                        <br />
                        <div className="mainText">
                          {t('geoPhysics.loggingTrack.techChar2.text1')}
                        </div>
                      </div>
                      <div className="techCharText2">
                        <span>
                          {t('geoPhysics.loggingTrack.techChar2.title2')}
                        </span>
                        <br />
                        <div className="mainText">
                          {t('geoPhysics.loggingTrack.techChar2.text2')}
                        </div>
                      </div>

                      <div className="techCharText1">
                        <Warn />
                        <div className="textInfo">
                          <span>
                            {t('geoPhysics.loggingTrack.techChar2.title3')}
                          </span>
                          <br />
                          <div className="textInfoContent">
                            {t('geoPhysics.loggingTrack.techChar2.text3')}
                          </div>
                        </div>
                      </div>
                    </>
                  </>
                )}
                {nav === 3 && (
                  <>
                    <div className="techSpec1">
                      {t('geoPhysics.loggingTrack.techSpec.overallDimensions')}
                    </div>
                    <div className="techSpecItem">
                      <div className="techChar">
                        {t('geoPhysics.loggingTrack.techSpec.height')}
                      </div>
                      <div className="techCharValue">3.891 m (12.840 ft)</div>
                    </div>
                    <div className="techSpecItem">
                      <div className="techChar">
                        {t('geoPhysics.loggingTrack.techSpec.width')}
                      </div>
                      <div className="techCharValue">2.493 m (8.277 ft)</div>
                    </div>
                    <div className="techSpecItem">
                      <div className="techChar">
                        {t('geoPhysics.loggingTrack.techSpec.length')}
                      </div>
                      <div className="techCharValue">8.979 m (29.630 ft)</div>
                    </div>
                    <div className="techSpecItem">
                      <div className="techChar">
                        {t('geoPhysics.loggingTrack.techSpec.groundClearance')}
                      </div>
                      <div className="techCharValue">1.175 m (3.877 ft)</div>
                    </div>
                    <div className="techSpecItem">
                      <div className="techChar">
                        {t('geoPhysics.loggingTrack.techSpec.engine')}
                      </div>
                      <div className="techCharValue">310 PS</div>
                    </div>
                    <div className="techSpecItem">
                      <div className="techChar">
                        {t('geoPhysics.loggingTrack.techSpec.generatorTitle')}
                      </div>
                      <div className="techCharValue">
                        {t('geoPhysics.loggingTrack.techSpec.generator')}
                      </div>
                    </div>
                    <div className="techSpecItem">
                      <div className="techChar">
                        {t('geoPhysics.loggingTrack.techSpec.drum')}
                      </div>
                      <div className="techCharValue">
                        {t('geoPhysics.loggingTrack.techSpec.drumCapacity')}
                      </div>
                    </div>
                    <div className="techSpec2">
                      {t('geoPhysics.loggingTrack.techSpec.speed')}
                    </div>
                    <div className="techSpecItem">
                      <div className="techChar">max.</div>
                      <div className="techCharValue">
                        250 m/min (820 ft/min)
                      </div>
                    </div>
                    <div className="techSpecItem">
                      <div className="techChar">min.</div>
                      <div className="techCharValue">
                        0,5 m/min (1,6 ft/min)
                      </div>
                    </div>
                    <div className="techSpec2">
                      {t(
                        'geoPhysics.loggingTrack.techSpec.maximumPullCapability',
                      )}
                    </div>
                    <div className="techSpecItem">
                      <div className="techChar">
                        {t('geoPhysics.loggingTrack.techSpec.fullDrum')}
                      </div>
                      <div className="techCharValue">30 kN</div>
                    </div>
                    <div className="techSpecItem">
                      <div className="techChar">
                        {t('geoPhysics.loggingTrack.techSpec.voidDrum')}
                      </div>
                      <div className="techCharValue">60 kN</div>
                    </div>
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

export default LoggingTruck;
