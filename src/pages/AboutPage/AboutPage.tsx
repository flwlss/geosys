import { useTranslation } from 'react-i18next';
import Container from '../../components/Container/Container';
import Marker from '../../components/Marker/Marker';
import './AboutPage.scss';
// import Number2 from "/src/assets/images/icons/number2.svg?react";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <Container>
        <div className="about__content">
          {/* <Number2 className="about__content__number" /> */}
          <Marker title={t('navbar.about')} />
          <div className="about__textWrapper">
            <p className="about__textWrapper__leftText">
              {t('aboutPage.startLeftText')} <span>Geo Sys</span>{' '}
              {t('aboutPage.endLeftText')}
            </p>
            <p className="about__textWrapper__rightText">
              {t('aboutPage.rightText')}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
