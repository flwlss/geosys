import Container from '../../components/Container/Container';
import Marker from '../../components/Marker/Marker';
import './LoggingTruck.scss';
import logginTruck from '../../assets/images/loggingTruck.jpg';

import Back from '/src/assets/images/icons/back.svg?react';
import Thermometer from '/src/assets/images/icons/thermometer.svg?react';
import Warn from '/src/assets/images/icons/warn.svg?react';
import Options from '/src/assets/images/icons/options.svg?react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LoggingTruck = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [nav, setNav] = useState(1);
  return (
    <div className="LoggingTruck">
      <Container>
        <div className="LoggingTruck__contentWrapper">
          <div onClick={() => navigate('/geophysics')} className="back">
            <Back />
            Геофизика
          </div>
          <div className="content">
            <div className="truck">
              Каротажный подъемник
              <img src={logginTruck} />
              <button>Заказать</button>
            </div>
            <div className="wrapperInfo">
              <div className="navInfo">
                <div
                  onClick={() => setNav(1)}
                  className={nav === 1 ? 'navInfoItemActive' : 'navInfoItem'}
                >
                  {nav === 1 ? (
                    <div className="item">
                      <div className="redDot" /> Общай информация
                    </div>
                  ) : (
                    '01'
                  )}
                </div>
                <div
                  onClick={() => setNav(2)}
                  className={nav === 2 ? 'navInfoItemActive' : 'navInfoItem'}
                >
                  {nav === 2 ? (
                    <div className="item">
                      <div className="redDot" /> Технические характеристики
                    </div>
                  ) : (
                    '02'
                  )}
                </div>
                <div
                  onClick={() => setNav(3)}
                  className={nav === 3 ? 'navInfoItemActive' : 'navInfoItem'}
                >
                  {nav === 3 ? (
                    <div className="item">
                      <div className="redDot" /> Техническая спецификация
                    </div>
                  ) : (
                    '03'
                  )}
                </div>
                <div
                  onClick={() => setNav(4)}
                  className={nav === 4 ? 'navInfoItemActive' : 'navInfoItem'}
                >
                  {nav === 4 ? (
                    <div className="item">
                      <div className="redDot" /> Техническая спецификация
                    </div>
                  ) : (
                    '04'
                  )}
                </div>
              </div>
              <div className="infoContent">
                {nav === 1 && (
                  <>
                    <div className="text1">
                      Компания Geo Sys Middle East является производителем
                      каротажных подъёмников, предназначенных для проведения
                      спускоподъемных операций в процессе геофизических
                      исследований нефтяных и газовых скважин.
                    </div>
                    <div className="text2">
                      В зависимости от глубины проведения исследований, а также
                      типов используемых кабелей, Geo Sys Middle East производит
                      различные типы каротажных подъемников: от небольших
                      установок до высокопроизводительных мощностью до 11 тонн /
                      24 000 фунтов.
                    </div>
                    <div className="text3">
                      Geo Sys ME производит каротажные подъёмники различной
                      конфигурации с учётом индивидуальных потребностей
                      заказчика.
                    </div>
                    <div className="text4">
                      <Thermometer />
                      <div className="textInfo">
                        Каротажный подъёмник адаптирован к работе в
                        температурных условиях от -40°C до +50°C. Установки Geo
                        Sys успешно эксплуатируются в полярных, тропических и
                        пустынных регионах планеты.
                      </div>
                    </div>
                    <div className="text5">
                      <Options />
                      <div className="textInfo">
                        Каротажный подъёмник Geo Sys состоит из шасси и кунга,
                        изготовленного по требованию заказчика. Монтаж на любые
                        шасси возможен при помощи вспомогательных рам. Настройка
                        разделена на две части. В техническом отсеке
                        располагается лебёдочное устройство. В лаборатории
                        размещен операторский пульт управления, а так же
                        различное измерительное и анализирующее геофизическое
                        оборудование. Кроме того, лаборатория оснащается
                        мебелью, бытовым оборудованием и приборами для
                        обеспечения комфортных условий пребывания персонала.
                      </div>
                    </div>
                  </>
                )}
                {nav === 2 && (
                  <>
                    <div className="text4">
                      <Warn />
                      <div className="textInfo">
                        <span>
                          Подъемники предназначены для труднопроходимых
                          территорий.
                        </span>
                        <br />
                        Каротажные машины оснащены системой полного привода для
                        езды по бездорожью и песку.
                      </div>
                    </div>
                    <div className="techCharText">
                      <span>Технические характеристики</span> <br />
                      <div className='mainText'>{t('geoPhysics.techChar.text2')}</div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="redBlock" />
        </div>
      </Container>
    </div>
  );
};

export default LoggingTruck;
