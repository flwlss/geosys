import { useEffect } from 'react';
import Router from './navigation/Router';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();
  const lang = localStorage.getItem('lang');

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    } else {
      localStorage.setItem('lang', 'ru');
    }
  }, []);

  return <Router />;
}

export default App;
