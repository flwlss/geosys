import Container from '../../components/Container/Container';
import tab1Image from '../../../public/images/groundSupport/tab1.png';
import tab2Image from '../../../public/images/groundSupport/tab2.png';
import tab3Image from '../../../public/images/groundSupport/tab3.png';
import tab4Image from '../../../public/images/groundSupport/tab4.png';
import tab5Image from '../../../public/images/groundSupport/tab5.png';
import Arrow from '/src/assets/images/icons/arrow.svg?react';
import './GroundSupport.scss';
import { useTranslation } from 'react-i18next';
import Number5 from '/src/assets/images/icons/number5.svg?react';
import Marker from '../../components/Marker/Marker';
import { useState } from 'react';
import { useModal } from '../../common/helpers';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';

const GroundSupport = () => {
  const [tab, setTab] = useState(0);
  const { isOpen, openModal, closeModal } = useModal();
  const { t } = useTranslation();

  return (
    <div className="groundSupport">
      <Number5 className="groundSupport__content__number" />{' '}
      {isOpen && <Modal closeModal={closeModal} />}
      <Container>
        <div className="groundSupport__content">
          <Marker title={t('navbar.gse')} />
          <div className="groundSupport__content__services">
            <div className="groundSupport__content__services__nav">
              <div
                onClick={() => setTab(1)}
                style={tab === 1 ? { fontWeight: 700 } : {}}
                className="groundSupport__content__services__nav__item"
              >
                {t('gse.tab1.title')} {tab == 1 && <Arrow />}
              </div>
              <div
                style={tab === 2 ? { fontWeight: 700 } : {}}
                onClick={() => setTab(2)}
                className="groundSupport__content__services__nav__item"
              >
                {t('gse.tab2.title')} {tab == 2 && <Arrow />}
              </div>
              <div
                style={tab === 3 ? { fontWeight: 700 } : {}}
                onClick={() => setTab(3)}
                className="groundSupport__content__services__nav__item"
              >
                {t('gse.tab3.title')} {tab == 3 && <Arrow />}
              </div>
              <div
                style={tab === 4 ? { fontWeight: 700 } : {}}
                onClick={() => setTab(4)}
                className="groundSupport__content__services__nav__item"
              >
                {t('gse.tab4.title')} {tab == 4 && <Arrow />}
              </div>
              <div
                style={tab === 5 ? { fontWeight: 700 } : {}}
                onClick={() => setTab(5)}
                className="groundSupport__content__services__nav__item"
              >
                {t('gse.tab5.title')}
                {tab == 5 && <Arrow />}
              </div>
            </div>
            <div className="groundSupport__content__services__content">
              {tab === 0 && (
                <>
                  <img src={tab1Image} />
                </>
              )}
              {tab === 1 && (
                <>
                  <img src={tab1Image} />
                  <div className="groundSupport__content__services__content__text">
                    {t('gse.tab1.text')}
                  </div>
                  <Button
                    text={t('navbar.request')}
                    onClick={() => {
                      openModal();
                    }}
                  />
                </>
              )}
              {tab === 2 && (
                <>
                  <img src={tab2Image} />
                  <div className="groundSupport__content__services__content__text">
                    {t('gse.tab2.text')}
                  </div>{' '}
                  <Button
                    text={t('navbar.request')}
                    onClick={() => {
                      openModal();
                    }}
                  />
                </>
              )}
              {tab === 3 && (
                <>
                  <img src={tab3Image} />
                  <div className="groundSupport__content__services__content__text">
                    {t('gse.tab3.text')}
                  </div>{' '}
                  <Button
                    text={t('navbar.request')}
                    onClick={() => {
                      openModal();
                    }}
                  />
                </>
              )}
              {tab === 4 && (
                <>
                  <img src={tab4Image} />
                  <div className="groundSupport__content__services__content__text">
                    {t('gse.tab4.text')}
                  </div>{' '}
                  <Button
                    text={t('navbar.request')}
                    onClick={() => {
                      openModal();
                    }}
                  />
                </>
              )}
              {tab === 5 && (
                <>
                  <img src={tab5Image} />
                  <div className="groundSupport__content__services__content__text">
                    {t('gse.tab5.text')}
                  </div>{' '}
                  <Button
                    text={t('navbar.request')}
                    onClick={() => {
                      openModal();
                    }}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GroundSupport;
