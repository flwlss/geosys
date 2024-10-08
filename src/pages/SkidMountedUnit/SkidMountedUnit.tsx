import Container from '../../components/Container/Container';

import './SkidMountedUnit.scss';
import skidMountedUnit from '../../assets/images/skidMountedUnit.jpg';

import Back from '/src/assets/images/icons/back.svg?react';
import Thermometer from '/src/assets/images/icons/thermometer.svg?react';

import Options from '/src/assets/images/icons/options.svg?react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useModal } from '../../common/helpers';
import Modal from '../../components/Modal/Modal';
import Button from '../../components/Button/Button';
import Number3 from '/src/assets/images/icons/number3.svg?react';

const SkidMountedUnit = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { isOpen, openModal, closeModal } = useModal();

  const [nav, setNav] = useState(1);
  return (
    <div className="SkidMountedUnit">
      <Number3 className="SkidMountedUnit__number" />
      {isOpen && <Modal closeModal={closeModal} />}
      <Container>
        <div className="SkidMountedUnit__contentWrapper">
          <div onClick={() => navigate('/geophysics')} className="back">
            <Back />
            {t('geoPhysics.main.marker')}
          </div>
          <div className="content">
            <div className="truck">
              <div className="redBlock" />
              {t('geoPhysics.main.title2noCaps')}
              <img src={skidMountedUnit} />
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
                      {t('geoPhysics.skidMountedUnit.general.text1')}
                    </div>
                    <div className="text4">
                      <Thermometer />
                      <div className="textInfo">
                        {t('geoPhysics.skidMountedUnit.general.text2')}
                      </div>
                    </div>
                    <div className="text5">
                      <Options />
                      <div className="textInfo">
                        {t('geoPhysics.skidMountedUnit.general.text3')}
                      </div>
                    </div>
                  </>
                )}
                {nav === 2 && (
                  <>
                    <>
                      <div className="techCharText2">
                        <span>
                          {t('geoPhysics.skidMountedUnit.techChar.title1')}
                        </span>
                        <br />
                        <div className="mainText">
                          {t('geoPhysics.skidMountedUnit.techChar.text1')}
                        </div>
                      </div>
                      <div className="techCharText2">
                        <span>
                          {t('geoPhysics.skidMountedUnit.techChar.title2')}
                        </span>
                        <br />
                        <div className="mainText">
                          {t('geoPhysics.skidMountedUnit.techChar.text2')}
                        </div>
                      </div>
                      <div className="techCharText2">
                        <span>
                          {t('geoPhysics.skidMountedUnit.techChar.title3')}
                        </span>
                        <br />
                        <div className="mainText">
                          {t('geoPhysics.skidMountedUnit.techChar.text3')}
                        </div>
                      </div>
                      <div className="techCharText2">
                        <span>
                          {t('geoPhysics.skidMountedUnit.techSpec2.title1')}
                        </span>
                        <br />
                        <div className="mainText">
                          {t('geoPhysics.skidMountedUnit.techSpec2.text1')}
                        </div>
                      </div>
                      <div className="techCharText2">
                        <span>
                          {t('geoPhysics.skidMountedUnit.techChar.title4')}
                        </span>
                        <br />
                        <div className="mainText">
                          {t('geoPhysics.skidMountedUnit.techChar.text4')}
                        </div>
                      </div>
                      <div className="techCharText2">
                        <span>
                          {t('geoPhysics.skidMountedUnit.techSpec2.title2')}
                        </span>
                        <br />
                        <div className="mainText">
                          {t('geoPhysics.skidMountedUnit.techSpec2.text2')}
                        </div>
                      </div>
                    </>
                    <>
                      <div className="techCharText2">
                        <span>
                          {t('geoPhysics.skidMountedUnit.techSpec2.title1')}
                        </span>
                        <br />
                        <div className="mainText">
                          {t('geoPhysics.skidMountedUnit.techSpec2.text1')}
                        </div>
                      </div>
                      <div className="techCharText2">
                        <span>
                          {t('geoPhysics.skidMountedUnit.techSpec2.title2')}
                        </span>
                        <br />
                        <div className="mainText">
                          {t('geoPhysics.skidMountedUnit.techSpec2.text2')}
                        </div>
                      </div>
                    </>
                  </>
                )}
                {nav === 3 && (
                  <>
                    <div className="techSpec1">
                      {t(
                        'geoPhysics.skidMountedUnit.techSpec.overallDimensions',
                      )}
                    </div>
                    <div className="techSpecItem">
                      <div className="techChar">
                        {t('geoPhysics.skidMountedUnit.techSpec.height')}
                      </div>
                      <div className="techCharValue">2.200 m (7.210 ft)</div>
                    </div>
                    <div className="techSpecItem">
                      <div className="techChar">
                        {t('geoPhysics.skidMountedUnit.techSpec.width')}
                      </div>
                      <div className="techCharValue">2.493 m (8.227 ft)</div>
                    </div>
                    <div className="techSpecItem">
                      <div className="techChar">
                        {t('geoPhysics.skidMountedUnit.techSpec.length')}
                      </div>
                      <div className="techCharValue">7.000 m (22.950 ft)</div>
                    </div>
                    <div className="techSpecItem">
                      <div className="techChar">
                        {t('geoPhysics.skidMountedUnit.techSpec.weight')}
                      </div>
                      <div className="techCharValue">7,5 t (16.100 lb)</div>
                    </div>
                    <div className="techSpecItem">
                      <div className="techChar">
                        {t(
                          'geoPhysics.skidMountedUnit.techSpec.driveUnitTitle',
                        )}
                      </div>
                      <div className="techCharValue">
                        {t('geoPhysics.skidMountedUnit.techSpec.driveUnit')}
                      </div>
                    </div>
                    <div className="techSpecItem">
                      <div className="techChar">
                        {t(
                          'geoPhysics.skidMountedUnit.techSpec.generatorTitle',
                        )}
                      </div>
                      <div className="techCharValue">
                        {t('geoPhysics.skidMountedUnit.techSpec.generator')}
                      </div>
                    </div>
                    <div className="techSpecItem">
                      <div className="techChar">
                        {t('geoPhysics.skidMountedUnit.techSpec.drum')}
                      </div>
                      <div className="techCharValue">
                        {t('geoPhysics.skidMountedUnit.techSpec.drumCapacity')}
                      </div>
                    </div>
                    <div className="techSpec2">
                      {t('geoPhysics.skidMountedUnit.techSpec.speed')}
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
                        'geoPhysics.skidMountedUnit.techSpec.maximumPullCapability',
                      )}
                    </div>
                    <div className="techSpecItem">
                      <div className="techChar">
                        {t('geoPhysics.skidMountedUnit.techSpec.fullDrum')}
                      </div>
                      <div className="techCharValue">30 kN</div>
                    </div>
                    <div className="techSpecItem">
                      <div className="techChar">
                        {t('geoPhysics.skidMountedUnit.techSpec.voidDrum')}
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

export default SkidMountedUnit;
