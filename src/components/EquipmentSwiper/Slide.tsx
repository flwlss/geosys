import Arrow from '/src/assets/images/icons/secondArrow.svg?react';
import Plus from '/src/assets/images/icons/plus.svg?react';
import Minus from '/src/assets/images/icons/minus.svg?react';
import { useState } from 'react';
import Button from '../Button/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

type SlideProps = {
  item: any;
  opemModal: () => void;
};

const Slide = ({ item, opemModal }: SlideProps) => {
  const [showCharacteristics, setShowCharacteristics] = useState(false);
  const [showSpecifications, setShowSpecifications] = useState(false);
  const { t } = useTranslation();

  return (
    <div>
      <div className="wrapper__rectangle" />
      <div className="slide">
        <div>
          <div className="slide__header">
            <div>
              <p className="slide__title">{item.serie}</p>
              <p className="slide__name">{item.title}</p>
            </div>
            <div className="slide__buttons">
              <div
                style={item.id === 1 ? { border: '1px solid #989898' } : {}}
                className="slide__buttons__prevBtn"
              >
                <Arrow style={item.id === 1 ? { color: '#989898' } : {}} />
              </div>
              <div
                style={item.id === 5 ? { border: '1px solid #989898' } : {}}
                className="slide__buttons__nextBtn"
              >
                <Arrow style={item.id === 5 ? { color: '#989898' } : {}} />
              </div>
            </div>
          </div>
          <div className="slide__photo">
            <Swiper
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
            >
              {item.images.map((item: any, index: number) => {
                return (
                  <SwiperSlide key={index}>
                    <img src={item} alt="" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="slide__btn">
            <Button onClick={opemModal} text={t('geoPhysics.main.button')} />
          </div>
        </div>
        <div className="slide__rightContent">
          <div>
            <div
              onClick={() => {
                setShowCharacteristics(!showCharacteristics);
              }}
              className="slide__rightContent__item"
            >
              <p>{t('equipmentPage.features')}</p>
              {showCharacteristics ? <Minus /> : <Plus />}
            </div>
            {showCharacteristics && (
              <div>
                {item.characteristics.map((item: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className="slide__rightContent__characteristics"
                    >
                      <p className="slide__rightContent__characteristics__title">
                        {item.title}
                      </p>
                      {item.subtitle.map((item: any, index: number) => {
                        return (
                          <p
                            key={index}
                            className="slide__rightContent__characteristics__subtitle"
                          >
                            {item}
                          </p>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="slide__rightContent__line" />
          <div>
            <div
              onClick={() => {
                setShowSpecifications(!showSpecifications);
              }}
              className="slide__rightContent__item"
            >
              <p>{t('equipmentPage.specifications')}</p>
              {showSpecifications ? <Minus /> : <Plus />}
            </div>
            {showSpecifications && (
              <div>
                <div>
                  {item.specifications.map((item: any, index: number) => {
                    return (
                      <div
                        key={index}
                        className="slide__rightContent__specifications"
                      >
                        <p className="slide__rightContent__specifications__title">
                          {item.title}
                        </p>
                        <p className="slide__rightContent__specifications__value">
                          {item.value}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <p className="slide__rightContent__specifications__note">
                  {item.note}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
