import { useTranslation } from 'react-i18next';
import Container from '../../components/Container/Container';
import './MainPage.scss';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div className="page">
      <Container>
        <div className="page__content">
          <p className="page__text">
            {t('mainPage.company')} <span>Geo Sys</span> {t('mainPage.text')}
          </p>
        </div>
      </Container>
    </div>
  );
};

export default MainPage;
